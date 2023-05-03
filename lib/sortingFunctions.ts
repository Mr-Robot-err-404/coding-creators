import recentMonthAndDay from "./recentMonthAndDay"
export interface Rank {
  [key: string]: [number, number]
}

export function sortNewCreators(arr:any): [any, any, Rank] {
    let copy = [...arr]
    let rank: Rank = {}
    const subOrder = arr.sort((a:any,b:any) => parseInt(b.statistics.subscriberCount) - parseInt(a.statistics.subscriberCount))
    const viewOrder = copy.sort((a:any,b:any) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount))
    for(var i = 0; i < subOrder.length; i++){
      const subId = subOrder[i].id
      rank[subId] = [0,0]
      rank[subId][0] = i + 1
    }
    for(var i = 0; i < viewOrder.length;i++){
      const viewId = viewOrder[i].id 
      rank[viewId][1] = i + 1
    }
    return [subOrder, viewOrder, rank]
  }

  export function bubbleSort(arr:any, type:string) {
    let swapped = true
    let end = arr.length - 1
    while (swapped) {
      swapped = false
      for (let i = 0; i < end; i++) {
        const [recentMonth, recentDay] = recentMonthAndDay(arr[i], type)
        const [recentMonth2, recentDay2] = recentMonthAndDay(arr[i + 1], type)
        let currVal = arr[i][type][`${recentMonth}`][recentDay]
        let currVal2 = arr[i + 1][type][`${recentMonth2}`][recentDay2]
        if (parseInt(currVal) < parseInt(currVal2)) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true; 
        }
      }
      end--
    }
    return arr
  }

  export function bubbleSortWeeklyViews(arr:any) {
    let swapped = true
    let end = arr.length - 1
    while (swapped) {
      swapped = false
      for (let i = 0; i < end; i++) {
        let currVal = parseInt(arr[i].weeklyViews)
        let currVal2 = parseInt(arr[i + 1].weeklyViews)
        if (currVal < currVal2) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
      end--
    }
    return arr
  }