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
  return acc + curr.amount;
}, 0);
console.log(bestellungen);
// ##### 2. Inkrementieren um 1
result();
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const erhöhen = arrayOfNumbers.map((n) => n + 1);
console.log(erhöhen);
// #### 3. Evens filtern
result();
const gerade = [1, 2, 3, 11, 12, 13].filter((n) => n % 2 === 0);
console.log(gerade);
// #### 4. Freunde filtern
result();
// #### 5. Summe
result();
const summieren=[1,2,3,4,5].reduce((acc,curr)=> {return acc +curr},0)
const summieren1=[6,7,7].reduce((acc,curr)=> {return acc +curr},0)
console.log(summieren)
console.log(summieren1)
// #### 6. Quadratwurzel
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];



