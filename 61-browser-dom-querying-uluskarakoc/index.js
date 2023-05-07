const body = document.querySelector("body");
body.style.fontFamily = "system-ui";
const title = document.querySelector(".title");
title.style.textAlign = "center";
const menuheadings = document.querySelectorAll(".category");
menuheadings.forEach((element) => {
  element.style.color = "Goldenrod";
  element.style.fontStyle = "oblique 40deg";
});
const colorGenerator = () => {
  const zahl1 = Math.floor(Math.random() * 255);
  const zahl2 = Math.floor(Math.random() * 255);
  const zahl3 = Math.floor(Math.random() * 255);
  const zahl4 = Math.random();
  return `rgba(${zahl1},${zahl2},${zahl3},${zahl4})`;
};

const colorGenerator3 = () => {
  // hexadezimal
  return Math.floor(Math.random() * 4294967295 + 1).toString(16);
}; // bu sorulacak ?????

const ul = document.querySelectorAll(".food-category");
ul.forEach((n) => {
  n.style.backgroundColor = colorGenerator();
  n.style.padding="1rem"
  n.style.listStyleType="none"
  n.style.width = "14rem";
});
const main=document.querySelector("main")
main.style.display = "flex";
main.style.justifyContent="space-around"