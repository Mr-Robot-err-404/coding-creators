export default function recentMonthAndDay(val:any, type:string) {
    let recentMonth:number = Object.keys(val[type]).length
    let recentDay:number = val[type][`${recentMonth}`].length - 1
    return [recentMonth, recentDay]
}