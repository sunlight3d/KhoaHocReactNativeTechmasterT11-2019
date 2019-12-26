package com.bai02;

import com.facebook.react.bridge.*;

public class RNHelper {
    public static WritableMap jsonToReact(String mJson) {
        WritableMap mWrite = Arguments.createMap();

        mWrite.putString("body", mJson);
        mWrite.putString("message", "Fetch data success");

        return mWrite;
    }
}