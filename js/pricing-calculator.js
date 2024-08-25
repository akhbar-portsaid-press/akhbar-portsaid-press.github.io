// source/js/pricing-calculator.js

// 1. Define the HTML Elements
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const totalOutput = document.getElementById('total');
const calculateButton = document.querySelector('button');

// 2. Add Event Listeners
calculateButton.addEventListener('click', calculateTotal);

// 3. Create the Calculation Function
function calculateTotal() {
  const quantity = parseFloat(quantityInput.value);
  const price = parseFloat(priceInput.value);
  const total = quantity * price;
  totalOutput.innerText = total.toFixed(2); // Format the total to 2 decimal places
}
