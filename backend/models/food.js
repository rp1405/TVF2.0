const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide food name"],
  },
  price: {
    type: Number,
    required: [true, "food price must be provided"],
  },
  availablity: {
    type: Boolean,
    default: false,
  },
  veg: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    default: "Fries",
  },
});

module.exports = mongoose.model("Food", foodSchema);
//DataSet // first paste in postman then uncomment ########IMPORTANT########
// [
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Fries",
//             "name": "French Fries",
//             "price": 50
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Fries",
//             "name": "PeriPeri Fries",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Burgers",
//             "name": "Aloo Tikki Burger",
//             "price": 50
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Burgers",
//             "name": "Tandoori Burger",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Burgers",
//             "name": "Cheese Burger",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Burgers",
//             "name": "Jumboo Cheese Burger",
//             "price": 90
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Vintage Cold Coffee",
//             "price": 40
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Choco Frappe",
//             "price": 50
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Irish Frappe",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Hazel Frappe",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Caramel Frappe",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Mango/ Vanilla/ Strawberry/ Chocolate Shake",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Oreo /Kitkat /Brownie Shake",
//             "price": 80
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "BlueLagoo/ Black Currant/ Mango/ Pineapple Slush",
//             "price": 50
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Shakes",
//             "name": "Virgin/ Watermelon/ GreenApple/ Orange/ BlueLagoon Mojito",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Ice Tea",
//             "name": "Lemon Ice Tea",
//             "price": 40
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Ice Tea",
//             "name": "Peach Ice Tea",
//             "price": 50
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Ice Tea",
//             "name": "Mint Ice Tea",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Sandwiches",
//             "name": "Veg Grilled Sandwich",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Sandwiches",
//             "name": "Paneer Tikka Sandwich",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Sandwiches",
//             "name": "Mexican Sandwich",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Sandwiches",
//             "name": "Revel Roasted Sandwich",
//             "price": 90
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Pastas",
//             "name": "Red Sauce Penne Pasta",
//             "price": 90
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Pastas",
//             "name": "White Sauce Pasta",
//             "price": 100
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Pastas",
//             "name": "Mix Sauce Pasta",
//             "price": 120
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Momos",
//             "name": "Steam Momos",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Momos",
//             "name": "Fried Momos",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Momos",
//             "name": "Gravy Momos",
//             "price": 80
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Momos",
//             "name": "Paneer Momos",
//             "price": 80
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Rolls",
//             "name": "Mix Veg Roll",
//             "price": 50
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Rolls",
//             "name": "Paneer Tikka Roll",
//             "price": 70
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Rolls",
//             "name": "Cheese Roll",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Quesadilla",
//             "name": "Quesadilla",
//             "price": 100
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Quesadilla",
//             "name": "Cheese Quesadilla",
//             "price": 120
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Quesadilla",
//             "name": "Tomato Cheese Quesadilla",
//             "price": 150
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Quesadilla",
//             "name": "Maxican Quesadilla",
//             "price": 150
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Quesadilla",
//             "name": "Tandoori Paneer Quesadilla",
//             "price": 150
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Deserts",
//             "name": "Pan Cake",
//             "price": 60
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Deserts",
//             "name": "Flavour Pan Cake",
//             "price": 80
//         },
//         {
//             "availablity": true,
//             "veg": true,
//             "category": "Deserts",
//             "name": "Brownie With IceCream",
//             "price": 80
//         }
//     ]
