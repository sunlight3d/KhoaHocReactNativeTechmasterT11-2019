package com.bai02;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.StandardCharsets;
import com.facebook.react.uimanager.IllegalViewOperationException;

import org.json.JSONObject;

import java.io.*;
import java.util.Hashtable;
import java.util.Map;
import java.util.HashMap;
import java.util.zip.*;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.*;

public class ApiManager extends ReactContextBaseJavaModule {
    private RequestManager rManager = new RequestManager();
    public Request get(String url, ReadableMap headers, ReadableMap params) {
        Request.Builder rBuilder = new Request.Builder();

        HttpUrl.Builder urlBuilder = HttpUrl.parse(url).newBuilder();
        // Map all params to QueryParams
        urlBuilder = this.rManager.paramsConverter(urlBuilder, params);

        String builderUrl = urlBuilder.build().toString();

        rBuilder.url(builderUrl);


        // Map all headers if headers were existed
        rBuilder = this.rManager.headersConverter(rBuilder, headers);

        return rBuilder.get().build();
    }


    private static ReactApplicationContext reactContext;
    public ApiManager(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    @NonNull
    @Override
    public String getName() {
        return "ApiManager";
    }
    private boolean isZipped(Response response) {
        String header = response.header("Content-Encoding");

        for (int i = 0; i < mZips.length; i++) {
            boolean flag = mZips[i].equalsIgnoreCase(header);

            if (flag) {
                return true;
            }
        }
        return false;
    }

    private String mZips[] = new String[] {"deflate", "gzip"};

    private RNHelper mHelper;
    private WritableMap mapWrite;

    private WritableMap getDataInflate(Response res) {
        try {
            String validJson;

            if (isZipped(res)) {
                final InputStream in = res.body().byteStream();

                Inflater deCompressor = new Inflater(true);
                InflaterInputStream input = new InflaterInputStream(in, deCompressor);
                ByteArrayOutputStream out = new ByteArrayOutputStream();

                byte[] buffer = new byte[8192];
                int length;
                BufferedInputStream b = new BufferedInputStream(input);

                while ((length = b.read(buffer)) > 0) {
                    out.write(buffer, 0, length);
                }

                validJson = new String(out.toByteArray(), "UTF-8");
// validJson = formatString(response);
            } else {
                validJson = res.body().string();
            }

            mapWrite = mHelper.jsonToReact(validJson);
            mapWrite.putInt("statusCode", res.code());
            return mapWrite;

        } catch (Exception e) {
            e.printStackTrace();

            mapWrite = Arguments.createMap();
            mapWrite.putString("message", e.getMessage());
        }

        return mapWrite;
    }
    @ReactMethod
    public void sendRequest(String url, Promise promise) {
        try {
            OkHttpClient mClient = new OkHttpClient();

            WritableMap headers = Arguments.createMap();
            headers.putString("Accept-Encoding", "gzip, deflate");
            WritableMap params = Arguments.createMap();
            Request mRequest = this.get(url, headers, params);
            mClient.newCall(mRequest).enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    promise.reject("213", e.getCause());
                    call.cancel();
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    WritableMap map = getDataInflate(response);
                    promise.resolve(map);
                }
            });
        } catch (IllegalViewOperationException e) {
            promise.reject("213", e.getMessage());
        }
    }
}
