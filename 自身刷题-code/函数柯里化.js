function curry(fn){
    if(typeof fn!=="function"){
        console.error('it must be an function')
    }
    return function curried(...args){
        if(args.length>=fn.length){
            return fn.apply(this,args)
        }else{
            return function (...args2){
                //记住这里还要连接
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

// 使用示例  
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 输出 6  
console.log(curriedSum(1, 2)(3)); // 输出 6