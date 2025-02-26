//手写Promise.all,那么需要的就是一个大数组和分别比对
function promiseAll(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            console.error('error')
        }
        let result=[]
        let count=0
        let nums=promises.length
        for(let i=0;i<nums;i++){
            Promise.resolve(promises[i]).then(value => {
                result[i]=value
                count++
                if(count===nums){
                    return resolve(result)
                }

            },err=>{
                return reject(err)
            })
        }
    })
}



