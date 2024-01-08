"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProvider} from 'next-auth/react';

const Nav = () => {
const isUserLoggedIn = true;

  return (
    <nav className='flex-between mb-16 pt-3 w-full'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg"
              alt=" "
              width={30}
              height={30}
              className='object-contain' />  
              <p className='logo_text'>Promptopia</p>
      </Link>
      {/* Mobile navigation */}
      <div className='sm:flex hidden'>
    {isUserLoggedIn? (
      <div className='flex md:gap gap-3'>
        <Link href={"/create-prompt"} className='black_btn'>Create post</Link>
        <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
      </div>
    ):(
      <div></div>
    )}
      </div>
    </nav>
  )
}

export default Nav