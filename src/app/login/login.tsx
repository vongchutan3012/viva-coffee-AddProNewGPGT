"use client"
import React from 'react';
import Link from 'next/link';


export default function Login() {  
  return (
    <main className='container'>
      <div className='main'>
        <div className='loginForm'>
          <h2 className='heading'>ĐĂNG NHẬP</h2>
          <form>
            <div className='formGroup'>
              <input className='inplogin' type="text" id="username" name="username" placeholder="Tài Khoản" />
            </div>
            <div className='formGroup'>
              <input className='inplogin' type="password" id="password" name="password" placeholder="Mật Khẩu" />
            </div>
            <div className='buttonContainer'>
              <button type="submit">Đăng Nhập</button> 
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
