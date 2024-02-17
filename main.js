const form = document.querySelector("form")
const input = document.querySelector(".submitDocs")
const spanErr = document.querySelector(".errorMsg")
console.log(spanErr)
input.addEventListener("invalid", () => {
    spanErr.classList.add("showError");
})
input.addEventListener("input", () => {
    spanErr.classList.remove("showError")
})
form.addEventListener("submit", (evt) => {
    console.log(evt)
    evt.preventDefault()
     alert("Your form has been submitted, Thank you")
     input.value = ""
})

/*if (input.validity.valid) {
    console.log("valid")
} else {
    console.log("not valid")
}*/