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
        msgDiv.classList.add("error");
    }
    else if (title === "Success!:" && !msgDiv.classList.contains("success")) {
        msgDiv.classList.toggle("success");
    }
    
}

function submitHandler(event) {
	event.preventDefault();
	let msg = '';
    let title = '';
	// Access the card number via the event target
	const cardNumber = event.target.querySelector('[name="card-number"]').value;
	const personName = event.target.querySelector('[name="card-holder"]').value;
	const exMonth = event.target.querySelector('[name="expiration"]').value;
	const exYear = event.target.querySelector('[name="expiration-year"]').value;

    const exDate = new Date(exYear, exMonth, 0);
    const currentDate = new Date();

    console.log(exDate, currentDate)

    if (exDate <= currentDate) {
        title = 'Error!:';
        msg = 'The expiration date is invalid or card is expired!'
    }

	console.log(cardNumber);
	// clear any previous errors
	displayResponse('');

	// check credit card number
	if (isNaN(cardNumber)) {
		// it is not a valid number
        title = 'Error!:';
		msg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(cardNumber)) {
        // it is a number, but is it valid?
        title = 'Error!:';
		msg += 'Card number is not a valid card number\n';
	}

    else if (isCardNumberValid(cardNumber) && msg === "") {

        msg = `Thanks for your order ${personName}! Check your inbox for details!`
    }

	if (msg !== '') {
        if (title === "") {
            title = "Success!:"
        }
		// there was an error. stop the form and display the errors.
        msg = HTMLTemplate(msg, title);
        DecideColors(title);
		displayResponse(msg);
		return false;
	}


	return true;
}

cardForm.addEventListener('submit', submitHandler);
