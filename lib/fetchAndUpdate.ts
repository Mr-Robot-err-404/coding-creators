import axios from "axios";
import prisma from "@/prisma/client";
import { fetchData } from "./fetchData";

export async function fetchAndUpdateStats() {
    const arr = await fetchData(2)
    let IDs = `${arr[0].id}`
    for(var i = 1; i < arr.length; i++){
      IDs += `%2C${arr[i].id}`
    }
    const res:any = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${IDs}&maxResults=50&key=${process.env.API_KEY_6}` )
    const newArr = res.data.items
    for(var i = 0; i < newArr.length; i++){
      const snippet = newArr[i].snippet
      const profilePic = snippet.thumbnails.medium.url
      const tag = snippet.customUrl
      const page = `https://www.youtube.com/${tag}`
        await prisma.creator.update({
            where: {id: newArr[i].id},
            data: {
                profilePic: profilePic,
                tag: tag, 
                page: page
            }
        })
    }
}