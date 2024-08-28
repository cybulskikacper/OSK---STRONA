document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.contact__form')
	const successMessage = document.querySelector('.contact__form-success')

	const handleFormSubmit = e => {
		e.preventDefault()
		form.reset()
		successMessage.style.display = 'block'
		setTimeout(() => {
			successMessage.style.display = 'none'
		}, 5000)
	}

	form.addEventListener('submit', handleFormSubmit)
})
