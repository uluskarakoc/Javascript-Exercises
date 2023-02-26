let i=1;
const result=()=>{console.log(`Result*****${i++}`)}

// **1. Get properties.**
result()
const getProperties=(obj)=>{return Object.keys(obj)}
console.log(getProperties({ name: "Mike", class: "4A", course: "English" }))
// **2. Get values.**
result()

const getValues=(obj)=>{return Object.values(obj)}
console.log(getValues({ choice1: "tea", choice2: "coffee", choice3: "milk" }));
