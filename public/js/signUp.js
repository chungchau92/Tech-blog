const signupFormHandler = async (e) => {
    e.preventDefault();
    
    const userName = document.querySelector("#name-signUp").value.trim();
    const passWord = document.querySelector("#pass-signUp").value.trim();


    if(userName && passWord) {
        const response = await fetch("/api/users/signup", {
            method: "POST",
            body: JSON.stringify({userName, passWord}),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText)
        }
    }

}

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler)
