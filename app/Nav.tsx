"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [pathname, setPathname] = useState('')
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

    return (
      <nav className="sticky top-0 z-20 border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
              <Link href={'/'}>
                <h3 onClick={() => setPathname('/')} className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-500 ${pathname === '/' ? 'text-blue-500' : 'text-white'}`} aria-current="page">WebDev</h3>
              </Link>
              </li>
              <li>
                <Link href={'/gamedev'}>
                <h3  onClick={() => setPathname('/gamedev')} className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-500 ${pathname === '/gamedev' ? 'text-blue-500' : 'text-white'} border-gray-700`}>GameDev & AI</h3>
                </Link>
              </li>
              <li>
                <Link href={'/comsci'}>
                  <h3 onClick={() => setPathname('/comsci')} className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-500 ${pathname === '/comsci' ? 'text-blue-500' : 'text-white'} hover:bg-transparent`}>Data Science & ComSci</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
  
  export default NavBar