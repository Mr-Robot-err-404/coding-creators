"use client"
import { useState } from "react"

export default function Dropdown({handleClick, option} : any) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="relative">
            <button id="dropdownDefaultButton" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} data-dropdown-toggle="hover" className={`${toggle ? "text-blue-500" : "text-white"} relative cursor-default bg-transparent font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center`} type="button">Filter:&nbsp;&nbsp;{option}<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className={`z-10 ${toggle ? "block" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a onClick={() => {
                        handleClick("views")
                        setToggle(false)
                    }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">views</a>
                </li>
                <li>
                    <a onClick={() => {
                        handleClick("subs")
                        setToggle(false)
                    }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">subs</a>
                </li>
                <li>
                    <a onClick={() => {
                        handleClick("views this week")
                        setToggle(false)
                    }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">views this week</a>
                </li>
                </ul>
            </div>
        </div> 
    )
} 