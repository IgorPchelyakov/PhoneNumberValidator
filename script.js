document
	.getElementById('check-btn')
	.addEventListener('click', validatePhoneNumber)
document.getElementById('clear-btn').addEventListener('click', clearResults)

function validatePhoneNumber() {
	const userInput = document.getElementById('user-input').value.trim()
	const resultsDiv = document.getElementById('results-div')

	if (!userInput) {
		alert('Please provide a phone number')
		return
	}

	const validPatterns = [
		/^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/, // 1 (555) 555-5555
		/^1?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/, // 1 555-555-5555, 555-555-5555
		/^1?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/, // 1 555 555 5555
		/^1?\(\d{3}\)\d{3}-\d{4}$/, // 1(555)555-5555
		/^1?\d{10}$/, // 15555555555, 5555555555
	]

	const isValid = validPatterns.some(pattern => pattern.test(userInput))
	resultsDiv.textContent = isValid
		? `Valid US number: ${userInput}`
		: `Invalid US number: ${userInput}`
}

function clearResults() {
	document.getElementById('user-input').value = ''
	document.getElementById('results-div').textContent = ''
}
