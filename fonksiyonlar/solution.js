// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapiniz.
function word(msg) {
  console.log(msg);
}
word("ulus");
word("ulus");
word("ulus");

// 2- Dikdörtgenin alan ve cevresini hesaplayan fonksiyonu yaziniz.
function alan(a, b) {
  console.log(a * b);
}
alan(7, 8);

// 3- Yazi tura uygulamasini fonksiyon kullanarak yapiniz.
function para(sayi) {
  if (sayi % 2 == 0) {
    console.log("yazi");
  } else {
    console.log("tura");
  }
}
para(Math.floor(Math.random() * 10));

// 4-kendisine gönderilen bir sayinin tam bölenlerinini dizi sekline döndüren fonksiyonu yaziniz.

function tamBlen(sayi) {
  if (sayi % 2 == 0)  {
    zahlen.push(2);
  } else if (sayi % 3 == 0) {
    zahlen.push(3);
  } else if (sayi % 5 == 0) {
    zahlen.push(5);
  } else if (sayi % 7 == 0) {
    zahlen.push(7);
  }
}
let = zahlen = [];
tamBlen(40);
console.log(zahlen);

// 5-Degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayiniz.
