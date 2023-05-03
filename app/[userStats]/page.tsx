import prisma from "@/prisma/client"
import BigCard from "./BigCard"
import recentMonthAndDay from "@/lib/recentMonthAndDay"
import { convertStats } from "@/lib/convertStats"
import { monthlyStats } from "@/lib/monthlyStats"
import NotFound from "./NotFound"

async function getUserInfo(id : any) {
    const arr = await prisma.creator.findMany({
      where: {id: id},
      select: {
        id: true, 
        title: true, 
        createdAt: false, 
        updatedAt: false, 
        subs: true, 
        views: true, 
        weeklyViews: false, 
        monthlyViews: false, 
        yearlyViews: false, 
        videoNum: true, 
        recentVid: true, 
        popularVid: true, 
        rank: true, 
        picture: false, 
        category: true, 
        profilePic: true, 
        tag: true, 
        page: true
      }
    })
    return arr
}

export default async function userPage({ params } : any) {
   const { userStats } = params
   const arr = await getUserInfo(userStats)
   if(arr.length == 0) return (
    <div className="flex justify-center items-center h-screen">
      <NotFound/>
    </div>
   )
   const stats = arr[0]
   const [viewArr, subArr] = convertStats(arr)
   const [recentMonth, recentDay] = recentMonthAndDay(stats, "videoNum")
   const [weeklySubs, monthlySubs] = monthlyStats(stats.subs, recentMonth, recentDay)
   const [weeklyViews, monthlyViews] = monthlyStats(stats.views, recentMonth, recentDay)
   const [weeklyVids, monthlyVids] = monthlyStats(stats.videoNum, recentMonth, recentDay)
   return (
      <div className="flex justify-center items-center">
        <div className="px-10"> 
          <BigCard title={stats.title} tag={stats.tag} page={stats.page} profilePic={stats.profilePic} recentVid={stats.recentVid} popularVid={stats.popularVid} subs={subArr[0]} views={viewArr[0]} category={stats.category} videoNum={stats.videoNum[`${recentMonth}`][recentDay]} weeklySubs={weeklySubs} weeklyViews={weeklyViews} weeklyVids={weeklyVids} monthlySubs={monthlySubs} monthlyViews={monthlyViews} monthlyVids={monthlyVids}/>
        </div>
      </div>
   )
}