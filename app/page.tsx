import axios from "axios"
import prisma from "@/prisma/client"
import { webDev } from '../lib/channels'
import Leaderboard from "./Leaderboard"
import { updateRecentVid } from "@/lib/updateFunctions"

interface Rank {
  [key: string]: [number, number];
}

async function getChannelStats(page:string) {
  let key:any
  if(page === 'webdev') key = process.env.API_KEY_8
  else if(page === 'gamedev') key = process.env.API_KEY_9
  else key = process.env.API_KEY
  let IDs = `${webDev[0].id}`
  for(var i = 1; i < webDev.length; i++){
    IDs += `%2C${webDev[i].id}`
  }
  try {
    const { data }  =  await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${IDs}&maxResults=50&key=${key}`)
    return data.items
  } catch (error:any) {
    console.log(error)
  }
} 

async function updateCreators(arr: any[], rank:Rank) {
  for(var i = 0; i < arr.length; i++){
    const subRank:number = rank[arr[i].id][0]
    const vidRank:number = rank[arr[i].id][1]
    const snippet = arr[i].snippet
    const stats = arr[i].statistics
    const profilePic = snippet.thumbnails.default.url
    try {
      await prisma.creator.update({
        where: {id: arr[i].id},
        data: {
          subs: {
            1:[stats.subscriberCount],
          },
          views: {
            1:[stats.viewCount],
          },
          videoNum: {
            1:[stats.videoCount],
          },
          rank: {
            1: [{0:subRank, 1:vidRank}],
          },
          picture: profilePic,
          category: 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

function sortWebDev(arr:any[]): [any[], any[]] {
  let month = '1', day = '0'
  let copy = [...arr]
  const subOrder = arr.sort((a:any,b:any) => parseInt(b.subs[month][day]) - parseInt(a.subs[month][day]))
  const viewOrder = copy.sort((a:any,b:any) => parseInt(b.views[month][day]) - parseInt(a.views[month][day]))
  return [subOrder, viewOrder]
}


async function fetchData() {
  try {
    const data = await prisma.creator.findMany({
      where: {
        category: 1
      },
      select: {
        id: true,
        title: true,
        createdAt: false,
        updatedAt: false, 
        subs: true, 
        views: true, 
        weeklyViews: true, 
        monthlyViews: true, 
        videoNum: true, 
        recentVid: true, 
        popularVid: true, 
        rank: true, 
        picture: true, 
        category: true
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  // const [sortedArrays, rank] = sortWebDev(arr)
  const arr = await fetchData()
  const [subOrder, viewOrder] = sortWebDev(arr)
  // await updateRecentVid(arr, "recent", "webdev")
  // await updateRecentVid(arr, "popular", "webdev")
  return (
    <main>
      <div>
        <div className="flex justify-center">
          <Leaderboard subOrder={subOrder} viewOrder={viewOrder} title="WebDev Leaderboard"/>
        </div>
      </div>
    </main>
  )
}
