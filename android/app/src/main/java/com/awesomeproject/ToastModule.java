package com.awesomeproject;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * ================================================
 * 作    者：贺志鹏
 * 版    本：com.awesomeproject
 * 创建日期： 2022/10/26 15:16
 * 描    述：
 * 修订历史：
 * ================================================
 */
public class ToastModule extends ReactContextBaseJavaModule {
    public ToastModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastUt";
    }

    @ReactMethod
    public void show(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }
}
