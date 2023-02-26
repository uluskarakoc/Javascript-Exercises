let i=1;
const result=()=>{console.log(`Result*****${i++}`)}
result()

// **1. Get properties.**
const getProperties=(obj)=>{return Object.keys(obj)}
console.log(getProperties({ name: "Mike", class: "4A", course: "English" }))
