//
function computeLoan() {
  // gather all html id amount, interest_rate, months
  // each gets its.value of each fields
  var amount = document.getElementById('amount').value;
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
}