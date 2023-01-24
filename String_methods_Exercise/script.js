let url = "https://wwww.google.com/";
let frage = "wie kann man in Hamburg eine Wohnung finden?";

// 1- wie viel karakter Url
console.log(`url ist ${frage.length} karakter`)

// 2- Wie viel Worter hat die Frage?
console.log(`die frage sind ${frage.split(" ").length} worter.`)
// console.log(frage.split(" "))

// 3- fängt die url mit https an?
console.log(`die Url fängt mit https ${url.startsWith("https")} an`)

// 4-Innerhalb die Frage gibt es das wort Hamburg?
console.log(`Es gibt innerhalb die Frage das Wort Hamburg ${frage.includes("Hamburg")}`)

//5- Führen Sie die url und Frage zusammen?
console.log(url + frage)

// 6- Schreiben Sie Wohnung mit dem Methods substring?
console.log(frage.substring(29,37))