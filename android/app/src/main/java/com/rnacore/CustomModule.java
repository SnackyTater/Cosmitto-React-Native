package com.rnacore;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.concurrent.TimeUnit;

public class CustomModule extends ReactContextBaseJavaModule {
    CustomModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void asyncFunction(){

    }
}
