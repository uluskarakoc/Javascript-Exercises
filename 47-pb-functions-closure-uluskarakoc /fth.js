function counter() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne,
    minusOne,
  };
}
const sayac = counter();

console.log(counter().plusOne())
console.log(counter().plusOne());
console.log(counter().plusOne());
console.log('------')
console.log(sayac.plusOne());
console.log(sayac.plusOne());
console.log(sayac.plusOne());
console.log(sayac.plusOne());
console.log(sayac.minusOne());

console.log('-------------------');

const s1 = (x) => {
  const s2 = (y) => {
    const s3 = (z) => {
      return x + y + z;
    };
    return s3;
  };
  return s2;
};
console.log(s1(2)(3)(4));