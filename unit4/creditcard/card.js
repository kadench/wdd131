const cardForm = document.getElementById("cardForm");

function isCardNumberValid(number) {
	return number === '1234123412341234';
}

function displayResponse(msg) {
	document.querySelector('.message').innerHTML = msg;
}

function HTMLTemplate(msg, title = "Success!:") {
    return `<h2>${title}</h2>
            <p>${msg}</p>`
}

function DecideColors(title) {
    const msgDiv = document.querySelector(".message");
    if (title === "Error!:" && !msgDiv.classList.contains("error")) {
        msgDiv.classList.remove("success");
        msgDiv.classList.add("error");
    }
    else if (title === "Success!:" && !msgDiv.classList.contains("success")) {
        msgDiv.classList.remove("error");
        msgDiv.classList.add("success");
    }
    
}

function submitHandler(event) {
    cardForm.reset()
	event.preventDefault();
	let msg = '';
    let title = '';
	// Access the card number via the event target
	const cardNumber = event.target.querySelector('[name="cardNumber"]').value;
	const personName = event.target.querySelector('[name="cardHolder"]').value;
    
    // Get the month and year from user
	const exMonth = event.target.querySelector('[name="expiration"]').value;
	let exYear = event.target.querySelector('[name="expirationYear"]').value;
    
    // Add 2000 to the total to stop the date from going into the 1900s
    // Turn it back into a string after conversion.
    exYear = String(Number(exYear) + 2000)

    // Set the dates for comparison
    const exDate = new Date(exYear, exMonth);
    const currentDate = new Date();

    // check credit card number
    if (isNaN(cardNumber)) {
        // it is not a valid number
        title = 'Error!:';
        msg = 'Card number is not a valid number\n';

    } else if (!isCardNumberValid(cardNumber)) {
        // it is a number, but is it valid?
        title = 'Error!:';
        msg = 'Card number is not a valid card number\n';
    }

    // If the entered date is less than the current date.
    if (exDate < currentDate) {
        title = 'Error!:';
        msg = 'The expiration date is invalid or card is expired!'
    }

	// clear any previous errors
	displayResponse('');


    if (isCardNumberValid(cardNumber) && msg === "") {

        msg = `Thanks for your order <strong>${personName}</strong>! Check your inbox for details!`
    }

	if (msg !== '') {
        if (title === "") {
            title = "Success!:"
        }
		// Construct the HTML Response
        msg = HTMLTemplate(msg, title);

        // Set the colors of the banner
        DecideColors(title);

        // Display the HTML Response
		displayResponse(msg);
		return false;
	}


	return true;
}

cardForm.addEventListener('submit', submitHandler);
