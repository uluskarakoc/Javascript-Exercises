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
const whoIsBiggest=(name="ulus",name2="serhat",ulusboy=175,serboy=190)=>{
    return 
}