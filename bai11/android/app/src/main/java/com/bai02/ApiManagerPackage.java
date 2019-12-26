package com.bai02;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.Nonnull;

public class ApiManagerPackage implements ReactPackage {

    @Override
    @Nonnull
    public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    @Nonnull
    public List<NativeModule> createNativeModules(
            @Nonnull ReactApplicationContext reactContext ) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ApiManager(reactContext));
        return modules;
    }

}