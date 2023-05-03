import Leaderboard from "./Leaderboard"
import { bubbleSort, bubbleSortWeeklyViews } from "@/lib/sortingFunctions"
import { fetchData } from "@/lib/fetchData"

function sortWebDev(arr:any[]): [any[], any[], any[]] {
  let copy = [...arr]
  let copy2 = [...arr]
  const subOrder = bubbleSort(arr, "subs")
  const viewOrder = bubbleSort(copy, "views")
  const weeklyViewOrder = bubbleSortWeeklyViews(copy2)
  return [subOrder, viewOrder, weeklyViewOrder]
}

export default async function Home() {
  const arr = await fetchData(1, null)
  const [subOrder, viewOrder, weeklyViewOrder] = sortWebDev(arr)
  return (
    <main>
      <div>
        <div className="flex justify-center">
          <Leaderboard subOrder={subOrder} viewOrder={viewOrder} weeklyViewOrder={weeklyViewOrder} title="WebDev Leaderboard"/>
        </div>
      </div>
    </main>
  )
}
