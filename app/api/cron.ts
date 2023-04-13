import axios from "axios"
import { fetchData } from "../../lib/fetchData"
import { sortNewCreators } from "../../lib/sortingFunctions"
import { updateCreators } from "../../lib/updateFunctions"
import { updateRecentVid } from "../../lib/updateFunctions"
import { updatePopularVid } from "../../lib/updateFunctions"
import { getChannelStats } from "@/lib/getChannelStats"

export default async function main() {
  const gameDev:any = await fetchData(2)
  const webDev:any = await fetchData(1)
  const gameDevItems = await getChannelStats(gameDev, 'gamedev')
  const webDevItems = await getChannelStats(webDev, 'webdev')
  const [gameSubOrder, gameViewOrder, gameRank] = sortNewCreators(gameDevItems)
  const [webSubOrder, webViewOrder, webRank] = sortNewCreators(webDevItems)
  await updateCreators(webDev, webViewOrder, webRank, 1)
  await updateCreators(gameDev, gameViewOrder, gameRank, 2)
  await updateRecentVid(webSubOrder, "webdev")
  await updateRecentVid(gameSubOrder, "gamedev")
  await updatePopularVid(webSubOrder, "webdev")
  await updatePopularVid(gameSubOrder, "gamedev")
  return
}

main()
