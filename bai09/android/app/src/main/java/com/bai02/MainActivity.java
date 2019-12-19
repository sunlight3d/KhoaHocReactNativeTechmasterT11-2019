package com.bai02;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.facebook.react.common.StandardCharsets;
import com.google.gson.Gson;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.util.zip.Inflater;
import java.util.zip.InflaterInputStream;

import okhttp3.*;
import okhttp3.internal.http.RealResponseBody;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "bai02";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Toast.makeText(this, "hello", Toast.LENGTH_LONG).show();
    System.out.println("hahahaha");
    OkHttpClient client = new OkHttpClient();
    Request request = new Request.Builder()
            .url("https://demo.3serp.vn:44318/SystemBsHubAPI/api/LoginHubAPI/Getdvcsbyuser?_user_name=ITG")
//            .header("Accept", "application/json")
//            .header("Accept-Encoding", "gzip, deflate")
            .build();
    client.newCall(request).enqueue(new Callback() {
      @Override
      public void onFailure(Call call, IOException e) {
        e.printStackTrace();
      }

      @Override
      public void onResponse(Call call, final Response response) throws IOException {
        if (!response.isSuccessful()) {
          throw new IOException("Unexpected code " + response);
        } else {
          // do something wih the result
          String jsonData = response.body().string();
          //Gson gson = new Gson();
          try {
            byte [] b = response.body().string().getBytes(StandardCharsets.UTF_8);
            String xx = StandardCharsets.UTF_8.encode(b);


            final InputStream in = response.body().byteStream();

            Inflater deCompressor = new Inflater(true);
            InflaterInputStream input = new InflaterInputStream(in, deCompressor);
            ByteArrayOutputStream out = new ByteArrayOutputStream();

            byte[] buffer = new byte[8192];
            int length;
            BufferedInputStream b = new BufferedInputStream(input);
            String validJson = new String(out.toByteArray(), "UTF-8");

            while ((length = b.read(buffer)) > 0) {
              out.write(buffer, 0, length);
            }


            JSONObject Jobject = new JSONObject(validJson);
            Log.d("myApp", "hahahaah");
          }catch (Exception e) {
            Log.d("myApp", "EEEE");
            System.out.println(e.toString());
          }



        }
      }
    });
  }
}
