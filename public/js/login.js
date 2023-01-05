const loginFormHandler =  (e) => {
    e.preventDefault();
    console.log(123)
}

document.querySelector("#login-form").addEventListener("submit", loginFormHandler)
