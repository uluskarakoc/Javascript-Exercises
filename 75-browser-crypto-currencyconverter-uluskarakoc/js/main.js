const apiUrl = 'https://api.coinbase.com/v2/prices';
const entryField = document.querySelector('#convert-from');
const outputField = document.querySelector('#convert-to');
const form = document.querySelector('#conversion-form');
const input = document.querySelector('#convert-count');
const output = document.querySelector('#output');
const inputAmount = document.querySelector('#convert-count');

const convertCurrency = async () => {
  // console.log(`${apiUrl}/${entryField.value}-${outputField.value}/spot`);
  let data = await fetch(
    `${apiUrl}/${entryField.value}-${outputField.value}/spot`
  );
  let jsonData = await data.json();
  output.value = (jsonData.data.amount * input.value).toFixed(2);
};

form.addEventListener('submit', (e) => { /// Bütün forma neden event ekledik??
  e.preventDefault();
  convertCurrency();
});
