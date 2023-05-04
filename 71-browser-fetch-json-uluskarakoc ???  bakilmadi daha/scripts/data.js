// Write you code here

// Export the data structure as a JSON string.
// Import the JSON string and parse to variable named parsedData in the scripts/index.js file.
import { recipeData } from './data.js'

let parsedData = JSON.parse(recipeData)

// console.log(parsedData);

// In the index.js file, create a program that populates the parsedData from into the website. 
// The page should display every recipe as a card that includes the recipe image, title, author and ingredients.
// console.log(Object.entries(parsedData));   // 0: Array [ "cakes", […] ]

Object.entries(parsedData).forEach(entrieCards => {
    const sections = [document.getElementById('cakes'), document.getElementById('biscuits'), document.getElementById('bread')]

    entrieCards[1].map(card => {
        console.log(card);

        sections.forEach(section => {
            if (card.type === section.id) {
                let cardDetails = `<div class="card m-3" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="Baked Goods" height="200rem">
                <div class="card-body">
                  <h4 class="card-title">${card.title}</h4>
                  <h6>${card.author}<h6>
                  <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(", ")}</p>
                </div>
              </div>`
                section.insertAdjacentHTML('afterbegin', cardDetails)
            }
        })
    })
})