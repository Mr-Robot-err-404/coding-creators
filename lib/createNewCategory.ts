import prisma from "@/prisma/client"
import { Rank } from "./sortingFunctions"

export async function createNewCategory(arr:any, rank: Rank) {
   for(var i = 0; i < arr.length; i++){
        const snippet = arr[i].snippet
        const stats = arr[i].statistics
        const picture = snippet.thumbnails.default.url
        const profilePic = snippet.thumbnails.medium.url
        const tag = snippet.customUrl
        const title = snippet.title
        const subRank:number = rank[arr[i].id][0]
        const vidRank:number = rank[arr[i].id][1]
        await prisma.creator.create({
            data: {
                id: arr[i].id,
                title: title, 
                subs: {
                    1: [stats.subscriberCount]
                },
                views: {
                    1: [stats.viewCount]
                },
                videoNum: {
                    1: [stats.videoCount]
                },
                rank: {
                    1: [{0:subRank, 1:vidRank}]
                },
                picture: picture, 
                profilePic: profilePic, 
                tag: tag, 
                category: 3
            }
        })
   }
}

export async function updateFields(arr: any) {
    for(var i = 0; i < arr.length; i++){
        const tag = arr[i].snippet.customUrl
        const page = `https://youtube.com/${tag}`
        await prisma.creator.update({
            where: {id: arr[i].id}, 
            data: {
                tag: tag, 
                page: page, 
                weeklyViews: null, 
                monthlyViews: null, 
                yearlyViews: null
            }
        })
    }
}