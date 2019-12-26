package com.bai02;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
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

//import okhttp3.*;
//import okhttp3.internal.http.RealResponseBody;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "bai02";
  }
  private void sendRequest() {
    // Instantiate the RequestQueue.
    RequestQueue queue = Volley.newRequestQueue(this);
    String url ="https://demo.3serp.vn:44318/SystemBsHubAPI/api/LoginHubAPI/Getdvcsbyuser?_user_name=ITG";

// Request a string response from the provided URL.

  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Toast.makeText(this, "hello", Toast.LENGTH_LONG).show();
    System.out.println("hahahaha");
    sendRequest();




  }
}
