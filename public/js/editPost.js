// update Post
const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-edit-input").value.trim();
    const content = document.querySelector("#content-edit-input").value.trim();

    if( title && content && event.target.hasAttribute("data-id")) {

        const id = event.target.getAttribute("data-id")

        const response = await fetch(`/api/posts/${id}`, {
            method : "PUT",
            body: JSON.stringify({ title, content}),
            headers: {"Content-Type": "application/json"},
        })

        if(response.ok) {
            document.location.replace("/dashbroad");
        } else {
            alert(response.statusText);
        }

    }
}

// Delete Post
const deletePostHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute("data-id")

    const response = await fetch(`/api/posts/${id}`, {
        method : "DELETE",
        headers: {"Content-Type": "application/json"},
    })

    if(response.ok) {
        document.location.replace("/dashbroad");
    } else {
        alert(response.statusText);
    }

}

const btnUpdatePost = document.querySelector("#btn-update-post");
const btnDeletePost = document.querySelector("#btn-delete-post");

btnUpdatePost.addEventListener("click", updatePostHandler)
btnDeletePost.addEventListener("click", deletePostHandler)