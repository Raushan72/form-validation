
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    validateInputs();
})

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // username
    if(usernameValue === ""){
        setError(username, "Username is required")
    }
    else{
        setSuccess(username)
    }

    // email
    if(emailValue === ""){
        setError(email, "Email is Required")
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "provide valid email")
    }
    else{
        setSuccess(email)
    }

    // password and cpassword
    if(passwordValue === ""){
        setError(password, "password is Required");
    }
    else if(passwordValue.length <8){
        setError(password, "password must be at least 8 characters.")
    }
    else{
        setSuccess(password)
    }

    if(cpasswordValue === ""){
        setError(cpassword, "please confirm your password")
    }
    else if(cpasswordValue !== passwordValue){
        setError(password, "password does't match.")
    }
    else{
        setSuccess(cpassword)
    }
}

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText="";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

function isValidEmail(e){
    // var reg = /^(([^<>()[\]\\.,;:\s@"
}




























































