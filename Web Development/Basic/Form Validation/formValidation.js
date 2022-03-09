const form = document.getElementById("form_id");
const phone = document.getElementById("contact");
const email = document.getElementById("email");
const userID = document.getElementById("username");
const password = document.getElementById("pswrd");
const confirm_password = document.getElementById("confirm_pswrd");
const button = document.getElementById("btn-submit")

//VALIDATION WHILE TYPING IN THE INPUT FIELD
//phone number validation
function ValidPhoneNumber() {
    var PhoneNo = /^\d{10}$/;
    if (phone.value == "") {
        document.getElementById("phone_message").style.color = "red";
        document.getElementById("phone_message").innerHTML = "❌ Phone Number field cannot be blank.";
    }
    else if (phone.value.match(PhoneNo)) {
        document.getElementById("phone_message").style.color = "green";
        document.getElementById("phone_message").innerHTML = "✔ Valid Phone Number.";
    }
    else {
        document.getElementById("phone_message").style.color = "red";
        document.getElementById("phone_message").innerHTML = "❌ Phone Number should have 10 digits";
    }
}

//email ID validation
function ValidEmail() {
    var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == ""){
        document.getElementById("email_message").style.color = "red";
        document.getElementById("email_message").innerHTML = "❌ Email ID field cannot be blank.";
    }
    else if (email.value.match(emailVal)) {
        document.getElementById("email_message").style.color = "green";
        document.getElementById("email_message").innerHTML = "✔ Valid Email Id";
    }
    else {
        document.getElementById("email_message").style.color = "red";
        document.getElementById("email_message").innerHTML = "❌ Email ID format is incorrect.";
    }
}

//username validation
function ValidUsername() {
    if (userID.value == "") { 
        document.getElementById("userid_message").style.color = "red";
        document.getElementById("userid_message").innerHTML = "❌ User ID field cannot be blank.";
    }
    else if (userID.value.length < 6){
        document.getElementById("userid_message").style.color = "red";
        document.getElementById("userid_message").innerHTML = "❌ User ID must be aleast 6 characters long.";
    }
    else {
        document.getElementById("userid_message").style.color = "green";
        document.getElementById("userid_message").innerHTML = "✔ Valid User Id";
    }
}

//password validation against constraints
function ValidPassword() {
    if (password.value == ""){
        document.getElementById("pswrd_message").style.color = "red";
        document.getElementById("pswrd_message").innerHTML = "❌ Password field cannot be blank.";
    }
    else if (password.value.match(/[a-z]/g) && password.value.match(/[A-Z]/g) && password.value.match(/[0-9]/g) && password.value.match(/[^a-zA-Z\d]/g) && password.value.length >= 8 && password.value.length <= 20) {
        document.getElementById("pswrd_message").style.color = "green";
        document.getElementById("pswrd_message").innerHTML = "✔ Password match the format."
    }
    else {
        document.getElementById("pswrd_message").style.color = "red";
        document.getElementById("pswrd_message").innerHTML = "❌ Password does not match the format."
    }
}

//password and retype-password validation
function matchPassword() {
    if (confirm_password.value == "") {
        document.getElementById("retype_message").style.color = "red";
        document.getElementById("retype_message").innerHTML = "❌ Re-type password field cannot be blank.";
    }
    else if (confirm_password.value != "" && password.value != confirm_password.value) {
        document.getElementById("retype_message").style.color = "red";
        document.getElementById("retype_message").innerHTML = "❌ Re-type passowrd does not matches the above password.";
    } 
    else {
        document.getElementById("retype_message").style.color = "green";
        document.getElementById("retype_message").innerHTML = "✔ Passwords are matching.";
    }
}

function FormSubmit() {
    var firstN = document.getElementById("fname").value;
    var lastN = document.getElementById("lname").value;
    document.getElementById("form_id").submit(); //form submission
    alert(" Name : " + firstN + " " + lastN + " \n Email : " + email.value + "\n\n Registered Successfully......");
}


