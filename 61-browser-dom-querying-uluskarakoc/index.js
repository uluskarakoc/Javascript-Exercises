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
  n.style.padding = "1rem";
  n.style.listStyleType = "none";
  n.style.width = "14rem";
});
const main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "space-around";
main.style.flexWrap = "wrap";

const warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.textAlign = "center";

// const allergyInfo=document.querySelectorAll(".allergy-info:nth-child(even)")
// allergyInfo.style.backgroundColor=red; // Niye calismadi??

const allergyInfo = document.querySelectorAll(".allergy-info");
allergyInfo.forEach((li, index) => {
  if (index % 2 === 1) {
    li.style.backgroundColor = "goldenrod";
    li.style.padding = "3px";
  }
});

const sectionWarnings = document.querySelector(".allergy-warning");
sectionWarnings.style.display = "flex";
sectionWarnings.style.flexDirection = "column";
sectionWarnings.style.justifyContent = "center";
sectionWarnings.style.alignItems = "center";
const allergies = document.querySelector(".allergies");
allergies.style.width = "13rem";
allergies.style.listStyleType = "none";

const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.gap = "5%";
footer.style.flexWrap = "wrap";
const foodDesc = document.querySelectorAll(".food-desc");
foodDesc.forEach((n) => {
  n.style.border = "3px goldenrod solid";
  n.style.width = "8rem";
n.style.borderRadius = "50%";
  n.style.height = "7rem";
  n.style.width = "7rem";
  n.style.display = "flex";
  n.style.justifyContent = "center";
  n.style.alignItems = "center";
});
