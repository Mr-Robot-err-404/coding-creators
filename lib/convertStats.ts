function rounding(val:string, power:number, digits:number) {
    let pow = Math.pow(10, power)
    let num = parseInt(val) / Math.pow(10,power)
    let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
    if(digits === power + 3 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
    if(power === 9) return val + 'B'
    if(power === 6) return val + 'M'
    if(power === 3) return val + 'K'
    return val
}


export function convertStats(viewOrder:any[]) {
    let arr1: any[] = [], arr2: any[] = []
    viewOrder.forEach((val) => {
        let recentMonth:number = Object.keys(val.subs).length
        let recentDay:number = val.subs[`${recentMonth}`].length - 1
        arr1.push(val.views[`${recentMonth}`][recentDay])
        arr2.push(val.subs[`${recentMonth}`][recentDay])
    })
    for(var i = 0; i < arr1.length; i++){
        let digits = arr1[i].length
        if(digits > 9) {
            let pow = Math.pow(10, 9)
            let num = parseInt(arr1[i]) / Math.pow(10,9)
            let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
            if(digits === 12 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
            arr1[i] = rounded + 'B'
        }
        else if(digits > 6) {
            let pow = Math.pow(10, 6)
            let num = parseInt(arr1[i]) / Math.pow(10,6)
            let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
            if(digits === 9 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
            arr1[i] = rounded + 'M'
        }
        else if(digits > 3) {
            let pow = Math.pow(10, 3)
            let num = parseInt(arr1[i]) / Math.pow(10,3)
            let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
            if(digits === 6 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
            arr1[i] = rounded + 'K'
        }
    }
    for(var i = 0; i < arr2.length; i++){
        let digits = arr2[i].length
        if(digits > 9) {
            let pow = Math.pow(10, 9)
            let num = parseInt(arr2[i]) / Math.pow(10,9)
            let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
            if(digits === 12 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
            arr2[i] = rounded + 'B'
        }
        else if(digits > 6) {
            let pow = Math.pow(10, 6)
            let num = parseInt(arr2[i]) / Math.pow(10,6)
            let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
            if(digits === 9 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
            arr2[i] = rounded + 'M'
        }
        else if(digits > 3) {
            let pow = Math.pow(10, 3)
            let num = parseInt(arr2[i]) / Math.pow(10,3)
            let rounded:any = (Math.round(num * pow) / pow).toFixed(1)
            if(digits === 6 || rounded[rounded.length - 1] === '0') rounded = Math.floor(rounded).toString()
            arr2[i] = rounded + 'K'
        }
    }
    return [arr1, arr2]
}