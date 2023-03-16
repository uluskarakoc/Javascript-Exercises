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
  toText() {
    return `${this.name} ${this.price} € in total. ${
      (this.price / 100) * 16
    } € VAT incl. (16%).`;
  }
  containedVAT() {
    return `${(this.price / 100) * 16}`;
  }
}

// ## 2. Cart
class Cart {
  constructor() {
    this.korb = [];
  }
  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.korb.push(shoppedProduct);
      return `Your shopping cart now contains ${this.korb.length} products`;
    } else {
      return `that the product ${this.name} is not available in the shop`;
    }
  }
  shoppedProduct() {}
  getProductInfoCart() {
    this.korb.forEach((item) => console.log(item.toText()));
  }
  getTotalItemsPrice() {
    const sum = this.korb.map(element => Number(element.price)).reduce((acc, curr) => acc + curr, 0)
    return `The total for ${this.korb.length} items in your cart amounts to ${sum} €.`
  }
}


// Create products
const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);
// Test products
console.log(tracksuit.toText());
console.log(tracksuit.containedVAT());
// Create cart
const cart = new Cart()
// Test cart
result();
console.log(cart.addProduct({ name: 'painting brush', price: 20 })) // Fails; not a product!
console.log(cart.addProduct(shoes))
console.log(cart.addProduct(tracksuit))
console.log(cart.getTotalItemsPrice())
cart.getProductInfoCart()
console.log(cart.addProduct("potato"))


//   ## 3. Test your cart with products
