let i=1;
const result=()=>{console.log(`Result🥊🥊🥊🥊🥊🥊${i++}`)}

result()
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }
  result()
  const inventory1 = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result1 = inventory1.find(({ name }) => name === "cherries");
  
  console.log(result); // { name: 'cherries', quantity: 5 }
  result()
  const arrayLike = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
  };
  console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
  // 7.3
  
  