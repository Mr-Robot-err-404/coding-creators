"use client"
import Link from "next/link"
import { CgArrowUp } from 'react-icons/cg'

export default function Card({title, subs, views, picture, videoNum, id, weeklySubs, weeklyVids, weeklyViews} : {title: string, subs: string, views: string, picture:string, videoNum:string, id:string, weeklySubs:any, weeklyViews:any, weeklyVids:any}) {
    return (
        <Link href={`/${id}`}>
            <li className="py-4 sm:py-5 hover:dark:bg-gray-700">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-14 h-14 rounded-full" src={picture} alt="Neil image"/>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col justify-center items-center border-r-2 border-gray-600 pr-4 w-40">
                            <p className="text-gray-200 text-2xl font-semibold">{subs}</p>
                            <div className="flex flex-row items-center justify-center mt-1">
                                <p className='text-sm font-medium text-green-500'>
                                    {weeklySubs ? `${weeklySubs}` : ""}
                                </p>
                                <p className="text-sm font-medium text-gray-400 ml-1">{weeklySubs ? <CgArrowUp style={{ color: '#00FF00' }}/> : ""}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center border-r-2 border-gray-600 pr-4 pl-4 w-40">
                            <p className="text-gray-200 text-2xl font-semibold">{views}</p>
                            <div className="flex flex-row items-center justify-center mt-1">
                                <p className='text-sm font-medium text-green-500'>
                                    {weeklyViews ? `${weeklyViews}` : ""}
                                </p>
                                <p className="text-xs font-medium text-gray-400 ml-1">{weeklyViews ? <CgArrowUp style={{ color: '#00FF00' }}/> : ""}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center border-r-2  border-gray-600 pr-4 pl-4 w-40">
                            <p className="text-gray-200 text-2xl font-semibold">{videoNum}</p>
                            <div className="flex flex-row items-center justify-center mt-1">
                                <p className='text-sm font-medium text-green-500'>
                                    {weeklyVids ? `${weeklyVids}` : ""}
                                </p>
                                <p className="text-xs font-medium text-gray-400 ml-1">{weeklyVids >= 1 ? <CgArrowUp style={{ color: '#00FF00' }}/> : ""}</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3">
                        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-gray-200">{title}</h5>
                    </div>
                </div>
            </li>
        </Link>
        
    )
}