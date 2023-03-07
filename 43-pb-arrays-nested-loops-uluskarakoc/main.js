let i = 1;
const result = () => {
  console.log(`Result---------------${i++}`);
};
result();
// Q1. Print the following pattern to the console:
const nestedSterne = () => {
  let sum = "";
  for (let i = 1; i < 5; i++) {
    sum += "* ";
    console.log(sum);
  }
};
nestedSterne();
// Q2. Given the following array:
result();
const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (let i = 0; i < ARR.length; i++) {
  console.log(`Row ${i}`);
  for (let j = 0; j < ARR[i].length; j++) {
    console.log(ARR[i][j]);
  }
}

// Q3. Output the following in the console using nested loops:
// 3/A
result();
arr=[]
for(i=1;i<5;i++){
    for(j=1;j<4;j++){
      arr.push(i)
    }
}
console.log(arr.join(" "))
