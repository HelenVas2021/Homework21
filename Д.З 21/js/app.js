class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppingPrice = 0;
    this.toppingCalories = 0;
    this.totalPrice = 0;
    this.totalCalories = 0;
  }
  addTopping(value) {
    this.toppingPrice += value.price;
    this.toppingCalories += value.calories;
  }
  calculatePrice() {
    this.totalPrice = this.size.price + this.stuffing.price + this.toppingPrice;
    return this.totalPrice;
  }
  calculateCalories() {
    this.totalCalories =
      this.size.calories + this.stuffing.calories + this.toppingCalories;
    return this.totalCalories;
  }
}

var hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log("Calories: " + hamburger.calculateCalories());

// сколько стоит
console.log("Price: " + hamburger.calculatePrice());

// // я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А сколько теперь стоит?
console.log("Price with sauce: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class Hamburger {
//   static SIZE_SMALL = { price: 50, calories: 20 };
//   static SIZE_BIG = { price: 100, calories: 40 };
//   static STUFFING_CHEESE = { price: 10, calories: 20 };
//   static STUFFING_SALAD = { price: 20, calories: 5 };
//   static STUFFING_POTATO = { price: 15, calories: 10 };
//   static TOPPING_MAYO = { price: 20, calories: 5 };
//   static TOPPING_SAUCE = { price: 15, calories: 0 };

//   constructor(size) {
//     this.size = size;
//     this.stuffingPrice = 0;
//     this.toppingPrice = 0;
//     this.toppingCalories = 0;
//     this.totalPrice = 0;
//     this.totalCalories = 0;
//     this.counter = 0;
//   }

//   addStuff(value) {
//     this.counter++;
//     if (this.counter <= 3) {
//       this.stuffingPrice += value.price;
//     } else {
//       console.log("тратарар");
//     }
//   }

//   addTopping(value) {
//     this.toppingPrice += value.price;
//     this.toppingCalories += value.calories;
//   }

//   calculatePrice() {
//     this.totalPrice = this.size.price + this.stuffingPrice + this.toppingPrice;

//     return this.totalPrice;
//   }
//   calculateCalories() {
//     this.totalCalories =
//       this.size.calories + this.stuffing.calories + this.toppingCalories;
//     return this.totalCalories;
//   }
// }

// var hamburger = new Hamburger(Hamburger.SIZE_BIG);

// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addStuff(Hamburger.STUFFING_SALAD);
// console.log(hamburger.calculatePrice());
// hamburger.addStuff(Hamburger.STUFFING_SALAD);
// console.log(hamburger.calculatePrice());
