const successMessage = document.querySelector("#success-div");
const btnEl = document.querySelector("#btn");

//console.log(inquery)
const validateForm = () => {
	const firstName = document.getElementById("first-name").value;
	const lastName = document.getElementById("last-name").value;
	const emailAddress = document.getElementById("email").value;
	const inquery = document.querySelectorAll("input[type='radio']");
	const message = document.getElementById("message").value;
	const checkbox = document.getElementById("checkbox");
	const errorMessage = document.querySelectorAll(".error");

	let isValid = true;

	if (!firstName) {
		isValid = false;
		errorMessage[0].textContent = "This field is required";
	} else {
		errorMessage[0].textContent = "";
	}
	if (!lastName) {
		isValid = false;
		errorMessage[1].textContent = "This field is required";
	} else {
		errorMessage[1].textContent = "";
	}

	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (emailAddress === "" || !emailPattern.test(emailAddress)) {
		isValid = false;
		errorMessage[2].textContent = "Please enter a valid email address";
	} else {
		errorMessage[2].textContent = "";
	}

	if (inquery[0].checked === false && inquery[1].checked === false) {
		isValid = false;
		errorMessage[3].textContent = "Please select a query type";
	} else {
		errorMessage[3].textContent = "";
	}

	if (message === "") {
		isValid = false;
		errorMessage[4].textContent = "This field is required";
	} else {
		errorMessage[4].textContent = "";
	}

	if (checkbox.checked === false) {
		isValid = false;
		errorMessage[5].textContent =
			"To submit this form, please consent to being contacted";
	} else {
		errorMessage[5].textContent = "";
	}

	return isValid;
};

btnEl.addEventListener("click", (e) => {
	!validateForm()
		? e.preventDefault()
		: (successMessage.style.display = "block");
});
