let i = 1;
const result = () => {
  console.log(`Result--------------${i++}`);
};
// 1. Write a function that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
result();
function camelize(str) {
  const arrStr = str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
  return arrStr;
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
result();
console.log("background-color".split("-"));

// 2. Write the code to create an array with two properties: fullName and id
result();
 let john = { name: "John", surname: "Smith", id: 1 };
 let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };

 let users = [john, pete, mary];

 let usersMapped =users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

 /*   usersMapped = [
     { fullName: "John Smith", id: 1 },
     { fullName: "Pete Hunt", id: 2 },
     { fullName: "Mary Key", id: 3 }
   ] */

 console.log(usersMapped[0].id); // 1
 console.log(usersMapped[0].fullName); // John Smith
 console.log(usersMapped)
