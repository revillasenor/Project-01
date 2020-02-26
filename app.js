var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var phoneNumber = document.getElementById("phone");
var email = document.getElementById("email");

var submit = document.getElementById("submit_btn");
submit.addEventListener("click", () => {
    alert("You have submitted the form");
})

var clear = document.getElementById("reset_btn");
clear.addEventListener("click", () => {
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    email.value = "";
})
