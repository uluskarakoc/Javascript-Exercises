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
// **Bonus**
result()
function whoIsBiggest1(name1, name2, weight1, weight2, height1, height2) {
    const bmi1 = calculateBMI(weight1, height1)
    const bmi2 = calculateBMI(weight2, height2)
    console.log(bmi1,bmi2);
    if(bmi1 > bmi2) {
      console.log(`${name1} is bigger`)
      return name1
    }
    console.log(`${name2} is bigger`)
    return name2
  }
  
  console.log(whoIsBiggest1('Frank', 'Mark', 80, 75, 175, 176))
//   ## Bonus Bonus
result()
function findAverageBMI(people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
      let weight = people[i][0];
      let height = people[i][1];
      let bmi = calculateBMI(weight, height);
      sum += bmi;
    }
    return (sum / people.length).toFixed(2);
  }
  
  let people = [
    [70, 170],
    [80, 180],
    [75, 175]
  ];
  
  console.log(findAverageBMI(people));



