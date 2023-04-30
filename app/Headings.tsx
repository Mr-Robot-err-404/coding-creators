"use client"
import Dropdown from "./Dropdown"
import { Quicksand } from "@next/font/google"

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function Headings({handleClick, option} : any) {
    return (
        <li className={`h-16 ${quicksand.className}`}>
            <div className="flex items-center h-10">
                <div className="flex-shrink-0">
                    <img className="w-14 h-0 rounded-full opacity-0" src="https://yt3.ggpht.com/ytc/AGIKgqNNqEOUWsALiAsHQWVtnretxTydSUyBVTNnXY4GZg=s240-c-k-c0x00ffffff-no-rj" alt="Profile Pic"/>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center border-r-2 border-gray-600 pr-4 w-40">
                        <p className="text-gray-100 text-lg">Subs</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r-2 border-gray-600 pr-4 pl-4 w-40">
                        <p className="text-gray-100 text-lg">Views</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r-2 border-gray-600 pr-4 pl-4 w-40">
                        <p className="text-gray-100 text-lg">Videos</p>
                    </div>
                </div>
                <div className="px-3">
                    <Dropdown handleClick={handleClick} option={option}/>   
                </div>
            </div>
            <hr className="my-4 border-gray-700"/>
        </li>
    )
}