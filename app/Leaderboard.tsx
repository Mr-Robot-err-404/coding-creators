"use client"
import { useState } from "react"
import Card from "./Card"
import { convertStats } from "@/lib/convertStats"
import recentMonthAndDay from "@/lib/recentMonthAndDay"
import { monthlyStats } from "@/lib/monthlyStats"
import Headings from "./Headings"

export default function Leaderboard({subOrder, viewOrder, weeklyViewOrder, title} : {subOrder:any, viewOrder:any, weeklyViewOrder:any, title:string}) {
    const [viewArr1, subArr1] = convertStats(viewOrder)
    const [viewArr2, subArr2] = convertStats(subOrder)
    const [viewArr3, subArr3] = convertStats(weeklyViewOrder)
    const [option, setOption] = useState("views")
    const handleClick = (option: string) => setOption(option)

    return (
        <div className="w-full max-w-4xl p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    <>
                    <Headings handleClick={handleClick} option={option}/>
                    {option == 'views' &&
                    viewOrder.map((record:any, i:number) => {
                        const [recentMonth, recentDay] = recentMonthAndDay(record, "videoNum") 
                        const [weeklyViews] = monthlyStats(record.views, recentMonth, recentDay)
                        const [weeklySubs] = monthlyStats(record.subs, recentMonth, recentDay)
                        const [weeklyVids] = monthlyStats(record.videoNum, recentMonth, recentDay)
                        return <Card title={record.title} subs={subArr1[i]} views={viewArr1[i]} picture={record.profilePic} videoNum={record.videoNum[`${recentMonth}`][recentDay]} key={record.id} id={record.id}  weeklySubs={weeklySubs} weeklyViews={weeklyViews} weeklyVids={weeklyVids}/>
                    })}
                    {option == 'subs' &&
                    subOrder.map((record:any, i:number) => {
                        const [recentMonth, recentDay] = recentMonthAndDay(record, "videoNum")
                        const [weeklyViews] = monthlyStats(record.views, recentMonth, recentDay)
                        const [weeklySubs] = monthlyStats(record.subs, recentMonth, recentDay)
                        const [weeklyVids] = monthlyStats(record.videoNum, recentMonth, recentDay)
                        return <Card title={record.title} subs={subArr2[i]} views={viewArr2[i]} picture={record.profilePic} videoNum={record.videoNum[`${recentMonth}`][recentDay]} key={record.id} id={record.id}  weeklySubs={weeklySubs} weeklyViews={weeklyViews} weeklyVids={weeklyVids}/>
                    })}
                    {option == 'views this week' &&
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



