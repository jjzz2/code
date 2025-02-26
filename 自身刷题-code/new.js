function myNew(constructor,...args){
    let obj={}
    obj.__proto__=constructor.prototype
    let result=constructor.apply(obj,args)
    return result instanceof Object?result:obj
}


// 1. 返回 result 的例子
// 在这个例子中，构造函数显式地返回了一个对象，因此 objectFactory 会返回这个对象，而不是新创建的对象。
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // 显式返回一个对象
//     return { name: 'Bob', age: 25 };  // 返回一个新的对象
// }
// const person1 = objectFactory(Person, 'Alice', 30);
// console.log(person1);  // 输出: { name: 'Bob', age: 25 }
// 解释：
// Person 构造函数中，return { name: 'Bob', age: 25 } 会导致 objectFactory 返回这个新对象，而不是返回默认的 newObject。
// 因此，最终输出的是 { name: 'Bob', age: 25 }，而不是 { name: 'Alice', age: 30 }。


// 2. 返回 newObject 的例子
// 在这个例子中，构造函数没有返回对象，而是默认返回 newObject。
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // 没有显式返回任何对象
// }
// const person2 = objectFactory(Person, 'Alice', 30);
// console.log(person2);  // 输出: Person { name: 'Alice', age: 30 }
// console.log(person2 instanceof Person);  // 输出: true
// 解释：
// Person 构造函数没有返回任何值，所以它默认返回新创建的对象 newObject。
// 最终返回的是一个 Person 类型的对象 { name: 'Alice', age: 30 }。
