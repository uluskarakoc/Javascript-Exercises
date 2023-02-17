let i = 1;
function result() {
  console.log(`Result ${i++}`);
}
result();
// The Fortune Teller
const tellFortune = (kinder=4, partner="yulia", standort="Hamburg", beruf="webdeveloper") => {
  return `Du wirst ein ${beruf} in ${standort} sein, verheiratet mit ${partner} und hast ${kinder} Kinder.`;
};
console.log(tellFortune());
console.log(tellFortune('double', 'Japan', 'Los angelas', "actress"));


// The Puppy Age Calculator

// The Lifetime Supply Calculator

// The Geometrizer

// The Temperature Converter
