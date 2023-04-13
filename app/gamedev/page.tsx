import Leaderboard from "../Leaderboard"
import { fetchData } from "@/lib/fetchData"

function sortGameDev(arr:any[]): [any[], any[]] {
  let month = '1', day = '0'
  let copy = [...arr]
  const subOrder = arr.sort((a:any,b:any) => parseInt(b.subs[month][day]) - parseInt(a.subs[month][day]))
  const viewOrder = copy.sort((a:any,b:any) => parseInt(b.views[month][day]) - parseInt(a.views[month][day]))
  return [subOrder, viewOrder]
}

export default async function GameDev() {
    const arr = await fetchData(2)
    const [subOrder, viewOrder] = sortGameDev(arr)
    return (
        <div className="flex justify-center">
          <Leaderboard subOrder={subOrder} viewOrder={viewOrder} title="Game Dev & AI Leaderboard"/>
        </div>
    )
}