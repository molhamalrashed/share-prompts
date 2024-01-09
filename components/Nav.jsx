"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
const isUserLoggedIn = true;
const [providers, setProviders] = useState([]);

  useEffect(() => {
  const setProvider = async ()=>{
    const response = await getProviders();
    setProviders(response);
  }

  setProvider();
  }, []);

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
      {/* Desktop navigation */}
      <div className='sm:flex hidden'>
    {isUserLoggedIn? (
      <div className='flex md:gap-5 gap-3'>
        <Link href={"/create-prompt"} className='black_btn'>Create post</Link>
        <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
        <Link href={"/profile"}>
        <Image src="assets/images/logo.svg"
          width={37}
          height={37}
          alt='profile image'
          className='rounded-full' />
        </Link>
      </div>
    ):(
      <>
      {providers && 
      Object.values(providers).map((provider)=>(
        <button type='button'
        key={provider.name}
        onClick={()=>signIn(provider.id)}
        className='black_btn'
        >
          Sign In
        </button>
      ))}
      </>
    )}
      </div>
      {/* {mobile navigation} */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className='flex'>
          <Image src="assets/images/logo.svg"
          width={37}
          height={37}
          alt='profile'
          className='rounded-full'
          onClick={console.log("hello")} />
          </div>
        ):(
          <>
          {providers && 
          Object.values(providers).map((provider)=>(
            <button type='button'
            key={provider.name}
            onClick={()=>signIn(provider.id)}
            className='black_btn'
            >
              Sign In
            </button>
          ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav