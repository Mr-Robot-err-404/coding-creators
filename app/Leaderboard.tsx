"use client"
import { useState } from "react"
import Card from "./Card"
import Dropdown from "./Dropdown"
import { convertStats } from "@/lib/convertStats"


export default function Leaderboard({subOrder, viewOrder, title} : {subOrder:any, viewOrder:any, title:string}) {
    const [viewArr1, subArr1] = convertStats(viewOrder)
    const [viewArr2, subArr2] = convertStats(subOrder)
    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <>
                    {!toggle && 
                    viewOrder.map((record:any, i:number) => {
                        return <Card title={record.title} subs={subArr1[i]} views={viewArr1[i]} picture={record.picture} videoNum={record.videoNum['1'][0]} key={i}/>
                    })}
                    {toggle && 
                    subOrder.map((record:any, i:number) => {
                        return <Card title={record.title} subs={subArr2[i]} views={viewArr2[i]} picture={record.picture} videoNum={record.videoNum['1'][0]} key={i}/>
                    })}
                    </>
                </ul>
            </div>
        </div>
    )
}


