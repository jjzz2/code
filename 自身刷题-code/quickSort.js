const quickSort=(arr)=>{
    //注意这里是小于等于，否则无法退出循环
    if(arr.length<=1){
        return arr
    }
    const midIndex=Math.floor(arr.length/2)
    const left=[]
    const right=[]
    const midIndexVal=arr[midIndex]

    for(let i=0;i<arr.length;i++){
        if(i!==midIndex){
            if(arr[i]<midIndexVal){
                left.push(arr[i])
            }
            else {
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat([midIndexVal],quickSort(right))
}
const arr=[1,2,3,4,5]
console.log(quickSort(arr))