function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function buyTicket() {
    let ageInput = prompt("Enter your age:");
    
    while (!isNumber(ageInput)) {
        ageInput = prompt("Please enter a valid age (a number):");
    }
    
    let age = parseInt(ageInput);
    let movieType = prompt("Is this a regular movie or a 3D movie? (Type 'regular' or '3D')").toLowerCase();
    let bookingTime = prompt("Enter the time you want to book your ticket (morning, afternoon, or evening)").toLowerCase();
    let discountCode = prompt("Do you have a discount code? Enter it here (leave blank if you don't):");

    let ticketPrice;

    switch(true) {
        case (age < 10):
            ticketPrice = 5;
            break;
        case (age >= 10 && age <= 65):
            ticketPrice = 15;
            break;
        case (age > 65):
            ticketPrice = 10;
            break;
        default:
            ticketPrice = 15;
            break;
    }

    if (movieType === "3d") {
        ticketPrice += 5;
    }

    if (bookingTime === "evening") {
        ticketPrice += 5;
    }

    if (discountCode !== null && discountCode !== "") {
        let discountAmount = ticketPrice * 0.25;
        ticketPrice -= discountAmount;
    }

    if (confirm("You selected a ticket priced at $" + ticketPrice + ". Do you want to proceed with the purchase?")) {
        alert("Thank you for your purchase!");
    } else {
        alert("No worries, you can always come back later.");
    }
}