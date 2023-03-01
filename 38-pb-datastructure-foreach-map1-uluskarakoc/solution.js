let i=1;
const result =()=>{console.log(`Result💥💥💥💥💥💥${i++}`)}
result()

// **1.** Write a function named `doubleValues` which accepts an array and returns a new array with all the original values doubled.
const doubleValues=(arr)=>{
console.log(arr.map((n)=>n*2))
}
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]