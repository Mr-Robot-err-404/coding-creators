function convertStats(val:any) {
    val = val.toString()
    let digits = val.length
    if(digits > 9) {
        let pow = Math.pow(10, 9)
        let num = parseInt(val) / Math.pow(10,9)
        let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
        if(digits === 12 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
        val = rounded + 'B'
    }
    else if(digits > 6) {
        let pow = Math.pow(10, 6)
        let num = parseInt(val) / Math.pow(10,6)
        let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
        if(digits === 9 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
        val = rounded + 'M'
    }
    else if(digits > 3) {
        let pow = Math.pow(10, 3)
        let num = parseInt(val) / Math.pow(10,3)
        let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
        if(digits === 6 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
        val = rounded + 'K'
    }
    return val
}


export function monthlyStats(val : any, recentMonth: any, recentDay: any) {
    let arr = val[recentMonth]
    const recentVal = parseInt(arr[recentDay])
    let dayCount = 0
    let diff = 0, weeklyIncrease = null, monthlyIncrease = null
    for(var i = arr.length - 1; i >= 0; i--){
        diff = recentVal - parseInt(arr[i])
        if(dayCount <= 7) {
            weeklyIncrease = diff
        }
        if(dayCount >= 20){
            monthlyIncrease = diff
        }
        dayCount++
    }
    let month = parseInt(recentMonth) - 1
    if(month >= 1){
        arr = val[`${month}`]
        for(var i = arr.length - 1; i >= 0; i--){
            if(dayCount > 30) break
            diff = recentVal - parseInt(arr[i])
            if(dayCount <= 7) {
                weeklyIncrease = diff
            }
            if(dayCount >= 20){
                monthlyIncrease = diff
            }
            dayCount++
        }
    }
    if(weeklyIncrease && weeklyIncrease > 0) weeklyIncrease = convertStats(weeklyIncrease)
    else weeklyIncrease = ""
    if(dayCount < 20) monthlyIncrease = "coming soon"
    else if(monthlyIncrease && monthlyIncrease > 0) monthlyIncrease = convertStats(monthlyIncrease)
    else monthlyIncrease = "-"
    return [weeklyIncrease, monthlyIncrease]
}