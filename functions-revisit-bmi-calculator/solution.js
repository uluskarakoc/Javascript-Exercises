let i =1;
const result =()=>console.log(`Result ${i++}`)
result()
// ## 1. Calculate BMI
const calculateBMI =(weight,height)=>{
    return weight/(height/100*height/100)
}
console.log(calculateBMI(80,175).toFixed(2))
console.log(calculateBMI().toFixed(2))
// ## 2. BMI vergleichen
result()
const whoIsBiggest=(name1,name2,große1,große2)=>{
    if(große1>große2){
        console.log(`${name1} ist großer`);
        return name1
    }else{
        console.log(`${name2} ist großer`)
        return name2
    }
   
}
console.log(whoIsBiggest("Frank", "Mark", 26.72, 28.33))