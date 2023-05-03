import { fetchData } from "@/lib/fetchData"
import { bubbleSort, bubbleSortWeeklyViews } from "@/lib/sortingFunctions"
import Leaderboard from "../Leaderboard"

function sortComSci(arr:any[]): [any[], any[], any[]] {
    let copy = [...arr]
    let copy2 = [...arr]
    const subOrder = bubbleSort(arr, "subs")
    const viewOrder = bubbleSort(copy, "views")
    const weeklyViewOrder = bubbleSortWeeklyViews(copy2)
    return [subOrder, viewOrder, weeklyViewOrder]
  }

export default async function ComSci() {
    const arr = await fetchData(3, 4)
    const [subOrder, viewOrder, weeklyViewOrder] = sortComSci(arr)
    return (
        <div className="flex justify-center">
            <Leaderboard subOrder={subOrder} viewOrder={viewOrder} weeklyViewOrder={weeklyViewOrder} title="ComSci & Data Science Leaderboard"/>
        </div>
    )
}