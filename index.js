//form validation
const txt = document.getElementById("text").value
const sel = document.getElementById("select").value
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
    form.target.reset();
    let messages = []
    if (text.value === '') {
        messages.push('Name is required')
    }



    if (select.value === '') {
        messages.push('Please select atleast one item ')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})


