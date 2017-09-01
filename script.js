//

function computeLoan() {
  // gather all html id amount, interest_rate, months
  // each gets its.value of each fields
  // regex /[^\d]/g /pattern/, ^ negate, \d digits, g global => if it is not digit replace
  //  with nothing
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
  
  // filters out %unit from apr from lender
  var apr1 = document.getElementById('apr1').textContent.toString().replace(/[^\d]/g, "");
  // console.log(apr1); /*debugging*/
  interest = (amount * (apr1 * .01)) / months;
  payment = ((amount / months) + interest).toFixed(2);
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // payment calculator for lender1
  var payment1 = document.getElementById('payment1');
  payment1.textContent = "Monthly Payment = $" + payment;
  
  var apr2 = document.getElementById('apr2').textContent.toString().replace(/[^\d]/g, "");
  interest = (amount * (apr2 * .01)) / months;
  payment = ((amount / months) + interest).toFixed(2);
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // payment calculator for lender2
  var payment2 = document.getElementById('payment2');
  payment2.textContent = "Monthly Payment = $" + payment;
}

// allow only numbers to be input on LoanAmount
function onlyNumbers() {
  var amount = document.getElementById('amount');
  amount.value = amount.value.toString().replace(/[^\d]/g, "");
  amount.value = amount.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// retrieves json for lender1
$.getJSON("lender.json","", function(json) {
  var lenderData = json;
    
  var lender1 = document.getElementById('lender1');
  lender1.textContent = lenderData[0].lenderName;
  
  var apr1 = document.getElementById('apr1');
  apr1.textContent = lenderData[0].APR + "%";
  
  // console.log(json); /*debugging*/
});

// retrieves json for lender2
$.getJSON("lender.json","", function(json) {
  var lenderData = json; // retrieves json
  
  var lender2 = document.getElementById('lender2');
  lender2.textContent = lenderData[1].lenderName;
  
  var apr2 = document.getElementById('apr2');
  apr2.textContent = lenderData[1].APR + "%";
  
  console.log(json);
});


function clearForm () {
  // for inputs use .value, for regular textbox use .textContent
  document.getElementById('amount').value = '';
  document.getElementById('interest_rate').value = '';
  document.getElementById('lender1').value = '';
  document.getElementById('lender2').value = '';
  document.getElementById('apr1').value = '';
  document.getElementById('apr2').value = '';
}
