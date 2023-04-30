const firstNameElement = document.querySelector("#firstName");
const lastNameElement = document.querySelector("#lastName");
const programmingLanguageElement = document.querySelector(
  "#programmingLanguage"
);
const formElement = document.querySelector("#send");
const sendButton = document.querySelector("#send");
const resetButton = document.querySelector("#reset");

function displayDevelopers() {
  let content = `<tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Programming Language</th>
                   </tr>`;

  if (localStorage.getItem("developers") !== null) {
    JSON.parse(localStorage.getItem("developers")).forEach((developer) => {
      content += `<tr>
        <td>${developer.firstName}</td>
        <td>${developer.lastName}</td>
        <td>${developer.programmingLanguage}</td>
      </tr>`;
    });
  }

  return (document.querySelector("table").innerHTML = content);
}

window.addEventListener("load", displayDevelopers);

const cleanFormFields = () => {
  firstNameElement.value = "";
  lastNameElement.value = "";
  programmingLanguageElement.value = "";
};

sendButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newDeveloper = {
    firstName: firstNameElement.value,
    lastName: lastNameElement.value,
    programmingLanguage: programmingLanguageElement.value,
  };
  const arrOfValues = Object.values(newDeveloper); // Bu kod tam olarak ne diyor

  if (!arrOfValues.includes("")) {
    if (localStorage.getItem("developers") === null) {
      localStorage.setItem("developers", "[]");
    }

    const oldDevelopers = JSON.parse(localStorage.getItem("developers"));
    oldDevelopers.push(newDeveloper);

    localStorage.setItem("developers", JSON.stringify(oldDevelopers));
    cleanFormFields();
    displayDevelopers();
  } else {
    alert("Felder dürfen nicht leer sein");
  }
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("developers");

  displayDevelopers();
});