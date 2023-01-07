const signupFormHandler = async (event) => {
    event.preventDefault();
    
    console.log(123);
    const username = document.querySelector("#name-signUp").value.trim();
    const password = document.querySelector("#pass-signUp").value.trim();

    console.log(password)

    if(username && password) {
        const response = await fetch("/api/users/signup", {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText)
        }
    }

}


document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);