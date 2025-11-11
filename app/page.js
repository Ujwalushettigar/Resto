"use client";
// import Login from './login';
import { useRouter } from 'next/navigation';
import React from 'react';
// import Register from './register';

export default function Home() {
  const router = useRouter();
  return (
  <div>
    <div className='w-full h-[1000px]'>
      <button className='bg-black text-white h-12 w-48 rounded-full mt-96 ml-[600px] text-2xl font-bold'
      type='button'
      onClick={()=>router.push("/login")}>
        Login
      </button>
<button className='bg-black text-white h-12 w-48 rounded-full mt-96 ml-[600px] text-2xl font-bold'
      type='button'
      onClick={()=>router.push("/register")}>
        Register
      </button>
      </div>
  </div>
);
}