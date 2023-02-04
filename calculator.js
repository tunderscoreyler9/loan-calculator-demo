window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountInput = document.getElementById('loan-amount');
  let yearsInput = document.getElementById('loan-years');
  let rateInput = document.getElementById('loan-rate');

  let values = {
    amount: 10000,
    years: 5,
    rate: 6.99
  }

  amountInput.value = values.amount;
  yearsInput.value = values.years;
  rateInput.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);

  return (
    (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))
  );
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = `$ ${monthly}`;
}
