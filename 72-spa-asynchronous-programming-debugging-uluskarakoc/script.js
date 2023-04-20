"use strict";
let userList = ["Maxim", "Necip", "Shaniqua", "Lucas", "Adam"];

userList.forEach((user, index) => {
  renderUser(user, index);
});

function renderUser(name, index) {
  console.log(name, index, userList);
}
