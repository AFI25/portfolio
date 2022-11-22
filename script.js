let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function(event) {
	event.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if(emailValue.includes('@')){
		alert('Thank you for your message')




	}else{
		alert('Oh no it looks like thats an invalid email address! Please try again.')
	}

})

//selecting html elements
//attaching 'click' listener
//getting user entered values
//javascript validations
