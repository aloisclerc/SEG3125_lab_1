	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 2.35
	},
	{
		name: "organic brocoli",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 2.99
	},
	{
		name: "organic bread",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 3.35
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 3.75
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 4.20
	},
	{
		name: "peanuts",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: false,
		price: 6.25
	},
	{
		name: "pistachio ice cream",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: false,
		nutAllergy: false,
		organic: false,
		price: 8.95
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 10.00
	},
	{
		name: "organic salmon",
		vegetarian: false,
		glutenFree: true,
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 13.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	console.log(restrictions);
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		let flag = true;
		if ((restrictions.indexOf("Vegetarian") > -1) && (prods[i].vegetarian != true)){
			flag = false;
		}
		if ((restrictions.indexOf("GlutenFree") > -1) && (prods[i].glutenFree != true)){
			flag = false;
		}
		if ((restrictions.indexOf("LactoseIntolerant") > -1) && (prods[i].lactoseIntolerant != true)){
			flag = false;
		}
		if ((restrictions.indexOf("NutAllergy") > -1) && (prods[i].nutAllergy != true)){
			flag = false;
		}
		if ((restrictions.indexOf("Organic") > -1) && (prods[i].organic != true)){
			flag = false;
		}
		if (flag){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
