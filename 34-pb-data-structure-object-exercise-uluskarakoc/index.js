let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};

// ## 1. The Recipe Card
result();
const myRecipe = {
  Title: "Mole",
  Servings: 2,
  Ingredients: ["cinnamon", "cumin", "cocoa"],
};
console.log(`Title: ${myRecipe.title}`);
console.log(`Servings: ${myRecipe.servings}`);
console.log(`Ingredients: ${myRecipe.Ingredients.join(', ')}`);
// ## 2. The Reading List
result();
// * Create an array of objects named `myBooks`, where each object describes a book and has the properties `title` (a string), `author` (a string), and `alreadyRead` (a boolean indicating if you've already read it).
const myBooks = [
  book1 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  book2 = { 
     title: "Calikusu",
     author: "tarik bugra",
     alreadyRead: true
  },
  book3 = {
     title: "Yaprak dökümü",
     author: "resat nuri güntekin",
     alreadyRead: false,
  },
];
// * Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
result();

for (i = 0; i < myBooks.length; i++) {
  console.log(`${myBooks[i].title} by ${myBooks[i].author}`);
  if(myBooks[i].alreadyRead===true){
    console.log(`You have already read ${myBooks[i].title} by ${myBooks[i].author}`)
  }else {
    console.log(`You still need to read ${myBooks[i].title} by ${myBooks[i].author}`)
  }
}
