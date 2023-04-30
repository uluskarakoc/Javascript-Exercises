"use strict";
let userList = ["Maxim", "Necip", "Shaniqua", "Lucas", "Adam"];

userList.forEach((user, index) => {
  renderUser(user, index);
});

function renderUser(name, index) {
  console.log(name, index, userList);
}



// lehrer lösung

// 'use strict'

// const userList = ['Maxim', 'Necip', 'Shaniqua', 'Lucas', 'Adam']

// function renderUser(name, index, array) {
//     console.log(name, index, array)
// }

// userList.forEach((user, index, array) => {
//     renderUser(user, index, array)
// });