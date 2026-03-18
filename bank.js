// Starting balance
var balance = 1000;

function deposit() {
  var amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    document.getElementById("message").innerText = "Please enter a valid amount.";
  } else {
    balance = balance + amount;
    document.getElementById("balance").innerText = balance;
    document.getElementById("message").innerText = "Deposited Rs." + amount;
  }
}

function withdraw() {
  var amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    document.getElementById("message").innerText = "Please enter a valid amount.";
  } else if (amount > balance) {
    document.getElementById("message").innerText = "Not enough balance!";
  } else {
    balance = balance - amount;
    document.getElementById("balance").innerText = balance;
    document.getElementById("message").innerText = "Withdrew Rs." + amount;
  }
}

function checkBalance() {
  document.getElementById("message").innerText = "Your balance is Rs." + balance;
}

    function checkBalance() {
      document.getElementById("message").innerText = "Your balance is ₹" + balance;
    }
