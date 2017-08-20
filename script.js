//
function computeLoan() {
  // gather all html id amount, interest_rate, months
  // each gets its.value of each fields
  var amount = document.getElementById('amount').value.toString().replace(/[^\d]/g, "");
  var interest_rate = document.getElementById('interest_rate').value;
  var months = document.getElementById('months').value;
  // below interest, payment are both calculated value
  // get interest amount
  var interest = (amount * (interest_rate * .01)) / months;
  // .toFixed(2) rounds off to 3 decimal places
  var payment = ((amount / months) + interest).toFixed(2);
  // Adds comma for thousands for money fomat
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // inputs payment in id='payment' in html
  document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;
  
  // filter out % from apr %
  var apr1 = document.getElementById('apr1').textContent.toString().replace(/[^\d]/g, "");
  console.log(apr1);
  interest = (amount * (apr1 * .01)) / months;
  payment = ((amount / months) + interest).toFixed(2);
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var payment1 = document.getElementById('payment1');
  payment1.textContent = "Monthly Payment = $" + payment;
}

function onlyNumbers() {
  var amount = document.getElementById('amount');
  amount.value = amount.value.toString().replace(/[^\d]/g, "");
  amount.value = amount.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$.getJSON("lender.json","", function(json) {
  var lenderData = json; // retrieves json
    
  var lender1 = document.getElementById('lender1');
  lender1.textContent = lenderData[0].lenderName;
  
  var apr1 = document.getElementById('apr1');
  apr1.textContent = lenderData[0].APR + "%";
  
  console.log(json);
});

