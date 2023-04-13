"use client"
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [selected, setSelected] = useState(1)
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link href={'/'}>
                <h3 onClick={() => setSelected(1)} className={`block py-2 pl-3 pr-4 text-white bg-blue-700 rounded bg-transparent md:p-0 dark:hover:text-blue-500 ${selected === 1 ? 'dark:text-blue-500' : 'dark:text-white'}`} aria-current="page">WebDev</h3>
              </Link>
              </li>
              <li>
                <Link href={'/gamedev'}>
                <h3 onClick={() => setSelected(2)} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 dark:hover:text-blue-500 ${selected === 2 ? 'dark:text-blue-500' : 'dark:text-white'} dark:hover:bg-gray-700 dark:border-gray-700`}>GameDev & AI</h3>
                </Link>
              </li>
              <li>
                <Link href={'/comsci'}>
                  <h3 onClick={() => setSelected(3)} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:p-0 dark:hover:text-blue-500 ${selected === 3 ? 'dark:text-blue-500' : 'dark:text-white'} dark:hover:bg-gray-700 dark:hover:bg-transparent`}>Data structures & Algos</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
  
  export default NavBar