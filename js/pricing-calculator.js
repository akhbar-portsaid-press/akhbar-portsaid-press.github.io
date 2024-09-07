document.addEventListener('DOMContentLoaded', function() {
  const category = document.getElementById('Category');
  const printing = document.getElementById('printing');
  const paper = document.getElementById('Paper');
  const proof = document.getElementById('Proof');
  const productionTime = document.getElementById('time');
  const totalElement = document.getElementById('total');
  const calculateButton = document.getElementById('calculateButton');

  function calculateTotal() {
    let total = 0;
    const quantity = parseInt(document.getElementById('Quantity').value); // Get the quantity value inside the function
    
    let categoryPrice = 0;
    if (quantity >= 500 && quantity < 1000) {
      categoryPrice = {
        0: 0.28,
        1: .13,
        2: 1.2,
        3: .12,
        4: .3,
        5: .20,
        6: .12,
        7: .1,
        8: .2,
        9: .1
      };
    } else if (quantity >= 1000 && quantity < 5000) {
      categoryPrice = {
        0: 0.22,
        1: .08,
        2: .82,
        3: .07,
        4: .18,
        5: .15,
        6: .09,
        7: .07,
        8: .18,
        9: .1
      };
    } else if (quantity >= 5000) {
      categoryPrice = {
        0: 0.15,
        1: .05,
        2: .4,
        3: .037,
        4: .1450,
        5: .075,
        6: .06,
        7: .055,
        8: .15,
        9: .1
      };
    }

    total += (categoryPrice[category.selectedIndex] || 0) * quantity;
    total += printing.selectedIndex * 2; // Example printing price
    total += paper.selectedIndex * 3; // Example paper price
    total += proof.selectedIndex * 1; // Example proof price
    total += parseInt(productionTime.value) * 10; // Example production time price

    totalElement.textContent = total.toFixed(2);
  }

  calculateButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
      calculateTotal();
  });
});
