function myInstanceof(left,right){
    let proto=Object.getPrototypeOf(left)
    let prototype=right.prototype
    while(true){
        if(!proto)return false
        if(prototype===proto)return true
        proto=Object.getPrototypeOf(proto)
    }
}
