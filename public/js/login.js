const loginFormHandler = async (e) => {
    e.preventDefault();
    
    const userName = document.querySelector("#name-login");
    const passWord = document.querySelector("#password-login");

    if(userName && passWord) {
        const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({userName, passWord}),
            headers: {"Content-Type": "application/json"},
        });

        if(response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText)
        }
    }

}

document.querySelector("#login-form").addEventListener("submit", loginFormHandler)
