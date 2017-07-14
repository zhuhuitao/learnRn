package com.xinshidai;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Struggle on 2017/7/14.
 */

public class BToast extends ReactContextBaseJavaModule {

    private ReactApplicationContext mContext;
    public BToast(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "BToast";
    }

    @ReactMethod
    public void show(String message){
        Toast.makeText(mContext,message,Toast.LENGTH_SHORT).show();
    }
}
