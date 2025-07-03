document.getElementById("Calculate").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent form submission
    // Get input values
    var amount = parseFloat(document.getElementById("amount").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var term = parseInt(document.getElementById("term").value);

    // Validate inputs
    if (isNaN(amount) || isNaN(rate) || isNaN(term) || amount <= 0 || rate <= 0 || term <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate monthly payment
    var monthlyRate = rate / 100 / 12;
    var numberOfPayments = term * 12;
    var monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    // Display result
    document.getElementById("result").innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2);
});


