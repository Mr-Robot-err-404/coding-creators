"use client"
import { useState } from "react"
import Card from "./Card"
import { convertStats } from "@/lib/convertStats"
import recentMonthAndDay from "@/lib/recentMonthAndDay"
import Dropdown from "./Dropdown"
import { monthlyStats } from "@/lib/monthlyStats"

export default function Leaderboard({subOrder, viewOrder, weeklyViewOrder, title} : {subOrder:any, viewOrder:any, weeklyViewOrder:any, title:string}) {
    const [viewArr1, subArr1] = convertStats(viewOrder)
    const [viewArr2, subArr2] = convertStats(subOrder)
    const [viewArr3, subArr3] = convertStats(weeklyViewOrder)
    const [option, setOption] = useState("Views")
    const handleClick = (option: string) => setOption(option)

    return (
        <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
                <div>
                    <Dropdown handleClick={handleClick} option={option}/>
                </div>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-500">
                    <>
                    {option == 'Views' &&
                    viewOrder.map((record:any, i:number) => {
                        const [recentMonth, recentDay] = recentMonthAndDay(record, "videoNum") 
                        const [weeklyViews] = monthlyStats(record.views, recentMonth, recentDay)
                        const [weeklySubs] = monthlyStats(record.subs, recentMonth, recentDay)
                        const [weeklyVids] = monthlyStats(record.videoNum, recentMonth, recentDay)
                        return <Card title={record.title} subs={subArr1[i]} views={viewArr1[i]} picture={record.profilePic} videoNum={record.videoNum[`${recentMonth}`][recentDay]} key={record.id} id={record.id}  weeklySubs={weeklySubs} weeklyViews={weeklyViews} weeklyVids={weeklyVids}/>
                    })}
                    {option == 'Subs' &&
                    subOrder.map((record:any, i:number) => {
                        const [recentMonth, recentDay] = recentMonthAndDay(record, "videoNum")
                        const [weeklyViews] = monthlyStats(record.views, recentMonth, recentDay)
                        const [weeklySubs] = monthlyStats(record.subs, recentMonth, recentDay)
                        const [weeklyVids] = monthlyStats(record.videoNum, recentMonth, recentDay)
                        return <Card title={record.title} subs={subArr2[i]} views={viewArr2[i]} picture={record.profilePic} videoNum={record.videoNum[`${recentMonth}`][recentDay]} key={record.id} id={record.id}  weeklySubs={weeklySubs} weeklyViews={weeklyViews} weeklyVids={weeklyVids}/>
                    })}
                    {option == 'Views this week' &&
                    weeklyViewOrder.map((record:any, i:number) => {
                        const [recentMonth, recentDay] = recentMonthAndDay(record, "videoNum")
                        const [weeklyViews] = monthlyStats(record.views, recentMonth, recentDay)
                        const [weeklySubs] = monthlyStats(record.subs, recentMonth, recentDay)
                        const [weeklyVids] = monthlyStats(record.videoNum, recentMonth, recentDay)
                        return <Card title={record.title} subs={subArr3[i]} views={viewArr3[i]} picture={record.profilePic} videoNum={record.videoNum[`${recentMonth}`][recentDay]} key={record.id} id={record.id}  weeklySubs={weeklySubs} weeklyViews={weeklyViews} weeklyVids={weeklyVids}/>
                    })}
                    </>
                </ul>
            </div>
        </div>
    )
}


