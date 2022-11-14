const inputVal = document.querySelector('#validation-input')

inputVal.addEventListener('blur', e => {
	if (e.target.value.length == inputVal.getAttribute('data-length')) {
		inputVal.classList.add('valid')
		if (inputVal.classList.contains('invalid')) {
			inputVal.classList.remove('invalid')
		}
	} else {
		if (inputVal.classList.contains('valid')) {
			inputVal.classList.remove('valid')
		}
		inputVal.classList.add('invalid')
	}
})