populateListProductChoices('dietSelect', 'displayProduct');

let cart = [];



// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// // Get all elements with class="tabcontent" and hide them
	// tabcontent = document.getElementsByClassName("tabcontent");
	// for (i = 0; i < tabcontent.length; i++) {
	// 	tabcontent[i].style.display = "none";
	// }

	// // Get all elements with class="tablinks" and remove the class "active"
	// tablinks = document.getElementsByClassName("tablinks");
	// for (i = 0; i < tablinks.length; i++) {
	// 	tablinks[i].className = tablinks[i].className.replace(" active", "");
	// }

	// Show the current tab, and add an "active" class to the button that opened the tab
	//document.getElementById(tabName).style.display = "block";
	const yOffset = -50;
	const element = document.getElementById(tabName);
	const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
	window.scrollTo({
		top: y,
		behavior: 'smooth'
	});
	//evt.currentTarget.className += " active";

}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
	let restrictions = [];
	for (let i = 0; i <= s1.children.length - 1; i++) {
		let box = s1.children[i].children[0];
		if (box.checked) {
			restrictions.push(box.id);
		} else {
			let index = restrictions.indexOf(box.id);
			if (index > -1) {
				restrictions.splice(index, 1);
			}
		}
	}

	var optionArray = restrictListProducts(products, restrictions);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>


	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i];

		let productPrice;
		for (let i = 0; i < products.length; i++) {
			if (products[i].name == productName) {
				productPrice = products[i].price;
			}
		}
		// create the checkbox and add in HTML DOM
		var button = document.createElement("button");
		button.innerHTML = productName;
		button.name = "product";
		button.value = productName;
		button.addEventListener("click", (ev) => {
			var ele = document.getElementsByName("product");
			var chosenProducts = [];

			var c = document.getElementById('displayCart');
			c.innerHTML = "";
			cart.push(ev.target.innerHTML);

			// build list of selected item
			var para = document.createElement("P");
			para.innerHTML = "You selected : ";
			para.appendChild(document.createElement("br"));
			for (i = 0; i < cart.length; i++) {
				para.appendChild(document.createTextNode(cart[i]));
				para.appendChild(document.createElement("br"));
				
			}

			// add paragraph and total price
			c.appendChild(para);
			c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(cart)));
		})

		s2.appendChild(button);
		

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')

		button.classList.add("product")

		label.htmlFor = productName;
		label.appendChild(document.createTextNode(" $" + productPrice));
		label.classList.add("product")
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}