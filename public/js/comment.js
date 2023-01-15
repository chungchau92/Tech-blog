const createCommentHandler = async (event) => {
    const comment = document.querySelector("#input-comment").value.trim();
    const id = event.target.getAttribute("data-id");
    
    
    if(comment) {
        const response = await fetch(`/api/comment/${id}`, {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {"Content-Type": "application/json"},
        })

        if(response.ok) {
            document.location.replace(`/api/comment/${id}`);
        } else {
            alert(response.statusText);
        }
    }
}

 document.querySelector("#btn-create-comment").addEventListener("click", createCommentHandler);

