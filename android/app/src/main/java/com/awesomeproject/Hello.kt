package com.awesomeproject

import android.widget.Toast

/**
 * ================================================
 * 作    者：贺志鹏
 * 版    本：com.awesomeproject
 * 创建日期： 2022/10/26 15:47
 * 描    述：
 * 修订历史：
 * ================================================
 */
class Hello {
    fun show() {
        Toast.makeText(MainApplication.getContext(), "hello", Toast.LENGTH_SHORT).show()
    }
}