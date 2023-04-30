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

// englisch version
/* 
const firstNameElement = document.querySelector("#firstName");
const lastNameElement = document.querySelector("#lastName");
const programmingLanguageElement = document.querySelector("#programmingLanguage");
const formElement = document.querySelector("#send");
const sendButton = document.querySelector("#send");
const resetButton = document.querySelector("#reset");

function displayDevelopers() {
  let content = `<tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Programming Language</th>
                   </tr>`;
                   
  //if there is developers then continue
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

//To see in the <table> the values of each "developer" from "developers" item" in dem localStorage after the page and external resources load

window.addEventListener("load", displayDevelopers);

const cleanFormFields = () => {
  firstNameElement.value = "";
  lastNameElement.value = "";
  programmingLanguageElement.value.value = "";
};

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  //get developer from all inputs
  const newDeveloper = {
    firstName: firstNameElement.value,
    lastName: lastNameElement.value,
    programmingLanguage: programmingLanguageElement.value,
  };
  const arrOfValues = Object.values(newDeveloper);
  if (!arrOfValues.includes("")) {
    // get an empty array if there is nothing saved
    if (localStorage.getItem("developers") === null) {
      localStorage.setItem("developers", "[]");
    }
    //get old developers array and slap it to the new developers array
    const oldDevelopers = JSON.parse(localStorage.getItem("developers"));
    oldDevelopers.push(newDeveloper);
    //save the old + new developers array to Local Storage
    localStorage.setItem("developers", JSON.stringify(oldDevelopers));
    cleanFormFields();
    displayDevelopers();
  } else {
    alert("fields cannot be empty");
  }
});

//Reset
resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("developers");
  // If we call the "displayDevelopers" function (which returns the innerHTML of <table> element) after remove the "developers" item from localStorage
  // we makes the innerHTML of <table> empty without refresh the page
  displayDevelopers();
});*/
