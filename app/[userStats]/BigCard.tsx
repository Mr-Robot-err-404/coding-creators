"use client"
import Link from "next/link"
import { Quicksand } from "@next/font/google"

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function BigCard({title, page, tag, profilePic, category, subs, views, videoNum, recentVid, popularVid, weeklySubs, weeklyViews, weeklyVids, monthlySubs, monthlyViews, monthlyVids} : any) {
    return (
        <div className="flex justify-center py-2">
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex justify-start">
                        <img className="w-1/2 rounded-full" src={profilePic} alt="Profile Picture"/>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-rows-2 gap-0">
                            <h2 className={`text-white text-2xl ${quicksand.className}`}>{title}</h2>
                            <h3 className="text-gray-400 text-md">{tag}</h3>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href={page} target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Visit Page
                            </button>
                        </Link>                        
                    </div>
                </div>
                <hr className="my-4 border-gray-500"/>
                <div className={`grid grid-cols-2 ${quicksand.className}`}>
                    <div className="grid grid-cols-2 py-3">
                        <div className="grid grid-rows-7 justify-center">
                            <div className="flex justify-center">
                                <h3 className={`text-white text-xl ${quicksand.className}`}>This week</h3>
                            </div>
                            <div>
                                <hr className="border-gray-500 my-2"/>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white text-lg">{weeklyViews ? `${weeklyViews} views` : "-"}</h3>
                            </div>
                            <div>
                                <hr className="border-gray-500 my-2"/>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white text-lg">{weeklySubs ? `${weeklySubs} subs` : "-"}</h3>
                            </div>
                            <div>
                                <hr className="border-gray-500 my-2"/>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white text-lg">{weeklyVids == 1 ? "1 new release" : weeklyVids > 1 ? `${weeklyVids} new releases` : "no new releases"}</h3>
                            </div>
                        </div>
                        <div className="grid grid-rows-7 justify-center">
                            <div className="flex justify-center">
                                <h3 className={`text-white text-xl ${quicksand.className}`}>This month</h3>
                            </div>
                            <div>
                                <hr className="border-gray-500 my-2"/>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white text-lg">{monthlyViews ? `${monthlyViews}` : "-"}</h3>
                            </div>
                            <div>
                                <hr className="border-gray-500 my-2"/>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white text-lg">{monthlySubs ? `${monthlySubs}` : "-"}</h3>
                            </div>
                            <div>
                                <hr className="border-gray-500 my-2"/>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-white text-lg">{monthlyVids == 1 ? "1 release" : monthlyVids > 1 ? `${monthlyVids} releases` : monthlyVids ? monthlyVids : "-"}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center px-2 items-center py-3">
                        <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-800">
                                <li className="py-3">
                                    <div className="grid grid-cols-3">
                                        <h3 className="text-white text-lg">Views</h3>
                                        <div className="flex justify-center">
                                            <h3 className="text-white text-lg">{views}</h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <div className="grid grid-cols-3">
                                        <h3 className="text-white text-lg">Subs</h3>
                                        <div className="flex justify-center">
                                            <h3 className="text-white text-lg">{subs}</h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <div className="grid grid-cols-3">
                                        <h3 className="text-white text-lg">Videos</h3>
                                        <div className="flex justify-center">
                                            <h3 className="text-white text-lg">{videoNum}</h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <div className="grid grid-cols-3">
                                    <h3 className="text-white text-lg">Recent release</h3>
                                        <div className="flex justify-center">
                                            <a target="_blank" href={"https://www.youtube.com/watch?v=" + recentVid} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Watch</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <div className="grid grid-cols-3">
                                        <h3 className="text-white text-lg">Most viewed</h3>
                                        <div className="flex justify-center">
                                            <a target="_blank" href={"https://www.youtube.com/watch?v=" + popularVid}  className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Watch</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <div className="grid grid-cols-3">
                                        <h3 className="text-white text-lg">Category</h3>
                                        <div className="flex justify-center">
                                            <h3 className="text-white text-lg">{category == 1 ? "Web Dev" : category == 2 ? "Game Dev" : category == 3 ? "ComSci" : category == 4 ? "Data Science" : "Game Dev & AI"}</h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div> 
        </div>
    )
    
}

