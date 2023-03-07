let i = 1;
const result = () => {
  console.log(`Result-------------${i++}`);
};
result();
// #### 1. Get Total Amount of Orders
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
const bestellungen = orders.reduce((acc, curr) => {
  return acc+curr.amount
}, 0);
console.log(bestellungen)
// ##### 2. Inkrementieren um 1
result();
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
const erhöhen=arrayOfNumbers.map((n)=> n+1)
console.log(erhöhen)

