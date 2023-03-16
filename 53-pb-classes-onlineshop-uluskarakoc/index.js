let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
result();
// ## 1. Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toText(){
return `${this.name} tracksuit ${this.price} € in total. ${(this.price)/100*16} € VAT incl. (16%).`
  }
  containedVAT(){
return `${(this.price)/100*16}`
  }
}
const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)

console.log(tracksuit.toText());
console.log(tracksuit.containedVAT());
