let i = 1;
const result = () => {
  console.log(`Result***********${i++}`);}
// #### 1. 2D Array
result()
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];
  for(i=0;i<board.length;i++){
    // console.log(board[i])
  for(j=0;j<board[i].length;j++){
    console.log(board[i][j])
  }
  }
  