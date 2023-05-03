import Leaderboard from "../Leaderboard"
import { fetchData } from "@/lib/fetchData"
import { bubbleSort, bubbleSortWeeklyViews } from "@/lib/sortingFunctions"

function sortGameDev(arr:any[]): [any[], any[], any[]] {
  let copy = [...arr]
  let copy2 = [...arr]
  const subOrder = bubbleSort(arr, "subs")
  const viewOrder = bubbleSort(copy, "views")
  const weeklyViewOrder = bubbleSortWeeklyViews(copy2)
  return [subOrder, viewOrder, weeklyViewOrder]
}

export default async function GameDev() {
    const arr = await fetchData(2, 7)
    const [subOrder, viewOrder, weeklyViewOrder] = sortGameDev(arr)
    return (
        <div className="flex justify-center">
          <Leaderboard subOrder={subOrder} viewOrder={viewOrder} weeklyViewOrder={weeklyViewOrder} title="Game Dev & AI Leaderboard"/>
        </div>
    )
}