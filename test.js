
let list1 =[2,3,4,1,5,6,9,8,7]
let list2 = ['hi','hello','world']
let users = [
    [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 28 }
    ],
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
  ];
  
// let str = list1.join(','); //Joins all elements of an array into a string.
// const list3=list1.splice(3,2)
// console.log(list1.includes(13));
// list1.forEach(x=>console.log(x))
// const list4=list1.map(x=>{return x*5})
// const list4=list1.filter(x=>{return x>5})
// let num=list1.reduce((acc, val) =>{return acc * val},1 )
// let num = list1.find(x=>x<6)    //Returns the first element in the array that satisfies the provided testing function.
// let num = list1.findIndex(y=>y<6)
// let num=list1.some(x=>x>4)   //Tests whether at least one element in the array passes the provided function.
// let num = list1.every(z=>z<10)   ///Tests whether all elements in the array pass the provided function.
// let filteredUser=users.map(m=>{return{...m,isactive:'y'}})
// users.flat(1)
console.log( users.flat(1));
