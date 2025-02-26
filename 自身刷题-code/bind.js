Function.prototype.myBind=function (context){
    if(typeof this!=='function'){
        throw new TypeError('Error')
    }
    let args=[...arguments].slice(1)
    let fn=this
    return function Fn(){
        return fn.apply(
            this instanceof Fn?this:context,
                    args.concat(...arguments)
        )
    }
}
// bind

Function.prototype.bind=function (context,...args){
    context=context||window
    const fnSymbol=Symbol('fn')
    context[fnSymbol]=this
    return function (..._args){
        args=args.concat(..._args)
        context[fnSymbol](...args)
        delete context[fnSymbol]
    }

}
//将剩余的参数进行联系