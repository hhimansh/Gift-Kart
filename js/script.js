// total quantity of individual products initially 0
var quantity = 0;
// total number of items is 0 OR cart is empty
var cart = 0;
// name of customer for the receipt
var nameOnReceipt = "";
// name of products added to the cart
var giftsBought = "";
// Cost of items before tax is calculated
var costBeforeTax = 0;
// GST tax 
var gstTax = 0;
// final cost of product
var finalCost = 0;

// individual functions for each product to add to cart functionality and other calculations
// Wireless headphones function
function giftQuantityWH() {
    quantity = prompt("Please enter the number of Wireless Headphones you want to add to cart!!");
    quantity = parseInt(quantity);
    if(isNaN(quantity) || quantity === 0 || quantity <0){
        alert("Please enter a valid numeric positive value only");
    }
    else if(quantity === ''){alert("Please enter some numeric value only!!");}
    else {
        cart += quantity;
        // calculating the cost of product according to number of same items
        costBeforeTax += quantity * 20;
        // GST calculation for total number of items
        gstTax += .13 * quantity * 20;
        // Final cost after tax
        finalCost = gstTax + costBeforeTax;
        giftsBought += "Wireless Headphones<br>";
        document.getElementById("content").innerHTML = `${giftsBought}`;
        document.getElementById("quant").innerHTML = `${cart}`;
        document.getElementById("totalCost").innerHTML = `${costBeforeTax}`;
        document.getElementById("totalTax").innerHTML = `${gstTax}`;
        document.getElementById("costAfterTax").innerHTML = `${finalCost}`;
    }
}

// Gaming heaset function
function giftQuantityGH() {
    quantity = prompt("Please enter the number of Gaming Headset you want to add to cart!!");
    quantity = parseInt(quantity);
    if(isNaN(quantity) || quantity === 0 || quantity <0){
        alert("Please enter a valid numeric positive value only");
    }
    else if(quantity === ''){alert("Please enter some numeric value only!!");}
    else {
        cart += quantity;
        costBeforeTax += quantity * 35;
        gstTax += .13 * quantity * 35;
        finalCost = gstTax + costBeforeTax;
        giftsBought += "Gaming Headset<br>";
        document.getElementById("content").innerHTML = `${giftsBought}`;
        document.getElementById("quant").innerHTML = `${cart}`;
        document.getElementById("totalCost").innerHTML = `${costBeforeTax}`;
        document.getElementById("totalTax").innerHTML = `${gstTax}`;
        document.getElementById("costAfterTax").innerHTML = `${finalCost}`;
    }
}

// Bluetooth speaker function
function giftQuantityBS() {
    quantity = prompt("Please enter the number of Bluetooth Speakers you want to add to cart!!");
    quantity = parseInt(quantity);
    if(isNaN(quantity) || quantity === 0 || quantity <0){
        alert("Please enter a valid numeric positive value only");
    }
    else if(quantity === ''){alert("Please enter some numeric value only!!");}
    else {
        cart += quantity;
        costBeforeTax += quantity * 25;
        gstTax += .13 * quantity * 25;
        finalCost = gstTax + costBeforeTax;
        giftsBought += "Bluetooth Speaker<br>";
        document.getElementById("content").innerHTML = `${giftsBought}`;
        document.getElementById("quant").innerHTML = `${cart}`;
        document.getElementById("totalCost").innerHTML = `${costBeforeTax}`;
        document.getElementById("totalTax").innerHTML = `${gstTax}`;
        document.getElementById("costAfterTax").innerHTML = `${finalCost}`;
    }
}

// Smart thermostat function
function giftQuantityST() {
    quantity = prompt("Please enter the number of Smart Thermostat you want to add to cart!!");
    quantity = parseInt(quantity);
    if(isNaN(quantity) || quantity === 0 || quantity <0){
        alert("Please enter a valid numeric positive value only");
    }
    else if(quantity === ''){alert("Please enter some numeric value only!!");}
    else {
        cart += quantity;
        costBeforeTax += quantity * 30;
        gstTax += .13 * quantity * 30;
        finalCost = gstTax + costBeforeTax;
        giftsBought += "Smart Thermostat<br>";
        // giftsBought = giftsBought.substring(0,giftsBought.length-1);
        document.getElementById("content").innerHTML = `${giftsBought}`;
        document.getElementById("quant").innerHTML = `${cart}`;
        document.getElementById("totalCost").innerHTML = `${costBeforeTax}`;
        document.getElementById("totalTax").innerHTML = `${gstTax}`;
        document.getElementById("costAfterTax").innerHTML = `${finalCost}`;
    }
}

// Power Bank function
function giftQuantityPB() {
    quantity = prompt("Please enter the number of Power Bank you want to add to cart!!");
    quantity = parseInt(quantity);
    if(isNaN(quantity) || quantity === 0 || quantity <0){
        alert("Please enter a valid numeric positive value only");
    }
    else if(quantity === ''){alert("Please enter some numeric value only!!");}
    else {
        cart += quantity;
        costBeforeTax += quantity * 15;
        gstTax += .13 * quantity * 15;
        giftsBought += "Power bank<br>";
        finalCost = gstTax + costBeforeTax;
        document.getElementById("content").innerHTML = `${giftsBought}`;
        document.getElementById("quant").innerHTML = `${cart}`;
        document.getElementById("totalCost").innerHTML = `${costBeforeTax}`;
        document.getElementById("totalTax").innerHTML = `${gstTax}`;
        document.getElementById("costAfterTax").innerHTML = `${finalCost}`;
    }
}

// checkout function
function checkOut() {
    // checking if final cost is greater than $50 for free shipping
    if(finalCost >= 50){
        document.getElementById("shipping").innerHTML = "Free Shipping";
        customerName();
    }
    // checking if final cost is between $0 and $50 for $10 shipping charges
    else if(finalCost > 0 && finalCost < 50){
        finalCost += 10;
        document.getElementById("shipping").innerHTML = "$10";
        alert("$10 Shipping charges has been added to the final cost since your order is less than $50");
        customerName();
    }
    // checking if final cost is -ve or null value
    else if(finalCost === 0 || finalCost < 0){
        alert("negative or zero (0) values are not allowed!!. Please add something in your cart before checkout");
    }
}

// customer name function
function customerName(){
    // getting customers name for the receipt/cart
    var nameOnOrder = prompt("Please enter your name for the order");
    // checking if the name string is empty
    if(nameOnOrder === ''){
        alert("Please enter a valid name");
    }
    // checking if name is a numeric value
    else if(nameOnOrder <=0 || nameOnOrder > 0){
        alert("Please don't enter any number value!!");
    }
    // displaying name in the table
    else{
        nameOnReceipt = nameOnOrder;
        document.getElementById("name").innerHTML = `${nameOnReceipt}`;
    }
}

// function for resetting the whole thing for user to start over
function reset(){
    // setting all the values to 0 / null for resetting purposes
    quantity = 0;
    cart = 0;
    nameOnReceipt = "";
    giftsBought = "";
    costBeforeTax = 0;
    gstTax = 0;
    finalCost = 0;
    document.getElementById("content").innerHTML = "Content Name";
    document.getElementById("quant").innerHTML = "0";
    document.getElementById("totalCost").innerHTML = "0";
    document.getElementById("totalTax").innerHTML = "0";
    document.getElementById("costAfterTax").innerHTML = "0";
    document.getElementById("name").innerHTML = "Customer name";
    document.getElementById("shipping").innerHTML = "Shipping amount";
}

// displaying final receipt
function displayReceipt(){
    // checking if any of the fields of the table are not empty
    if(isNaN(giftsBought) && cart !==0 && isNaN(nameOnReceipt) && quantity!==0 && costBeforeTax!==0 && gstTax !==0 && finalCost!==0){
        let finalOutput = `
        <table>
        <tr>
          <th>Gifts Bought</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th>Tax</th>
          <th>Total Cost</th>
          <th>Name on Gift</th>
        </tr>
        <tr>
            <td>${giftsBought}</td>
            <td>${cart}</td>
            <td>${costBeforeTax}</td>
            <td>${gstTax}</td>
            <td>${finalCost}</td>
            <td>${nameOnReceipt}</td>
        </tr>
        </table>
        `;
        document.getElementById("displayFinalReceipt").innerHTML = finalOutput;
    }
    else{
        alert("No empty or 0 values allowed on the receipt!! Please make sure you added atleat one item in the cart!!");
    }
}
