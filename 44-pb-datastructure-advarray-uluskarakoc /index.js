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
