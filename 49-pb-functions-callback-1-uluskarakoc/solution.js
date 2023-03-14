

const greetMessage=(name)=>{
console.log(`Good Morning ${name}`);
}
const greetUsers=(arr,greetMessage)=>{
    arr.forEach((n)=>{
        greetMessage(n)
    })
}

greetUsers(["John","Peter","Mark"], greetMessage)
