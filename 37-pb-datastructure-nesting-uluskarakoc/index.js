let i = 1;
const result = () => {
  console.log(`Result***********${i++}`);
};
// #### 1. 2D Array
result();
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];
for (let i = 0; i < board.length; i++) {
  // console.log(board[i])
  let sum = "";
  for (j = 0; j < board[i].length; j++) {
    // console.log(board[i][j]);
    sum += board[i][j];
  }
  console.log(sum);
}
// #### 2. Doggo
result();
// 2.1
const doggo = { name: "lion", breed: "Kangal" };
// 2.2
doggo.favoriteFoods = ["fleisch", "ice", "chicken"];
console.log(doggo);
// 2.3
doggo.favoriteFoods[1];
// console.log(doggo.favoriteFoods[1])
// 2.4
doggo.showFavorites = () => {
  let sum = "";
  for (let i = 0; i < doggo.favoriteFoods.length; i++) {
    sum += doggo.favoriteFoods[i];
  }
  console.log(sum);
};
// console.log(doggo.showFavorites())
doggo.showFavorites();
