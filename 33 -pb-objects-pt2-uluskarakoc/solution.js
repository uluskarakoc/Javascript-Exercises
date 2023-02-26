let i = 1;
const result = () => {
  console.log(`Result*****${i++}`);
};
// # **1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt.**
const isWithinRange = (zahl, obj) => {
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    if (zahl >= entries[0][1] && zahl <= entries[1][1]) {
      return true;
    }
    return false;
  }
};
console.log(isWithinRange(4, { min: 0, max: 5 }));
console.log(isWithinRange(4, { min: 4, max: 5 }));
console.log(isWithinRange(4, { min: 6, max: 10 }));
console.log(isWithinRange(5, { min: 5, max: 5 }));

