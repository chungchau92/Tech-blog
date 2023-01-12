// clikck btn new post show form create post
const newPostHandler = async () => {

    const formCreate = document.querySelector(".form-create");
    const listPosts = document.querySelector(".list-posts")

    if (formCreate.style.display === 'none') {
        listPosts.style.display = "none"
        formCreate.style.display = 'block';
    } else {
        listPosts.style.display = "block"
        formCreate.style.display = 'none';
    }

}
// click btn create Post
const createPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-input").value.trim();
    const content = document.querySelector("#content-input").value.trim();

    if( title && content) {
        const response = await fetch("/api/posts/create", {
            method: "POST",
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

//  click post to edit
const editPostHandler = async () => {
    
}

document.querySelector("#btn-create-post").addEventListener("click", createPostHandler)

document.querySelector(".btn-new-post").addEventListener("click", newPostHandler);

// loop post in all post then add event click
const allPost = document.querySelectorAll(".post")
    
allPost.forEach((post) => {
    post.addEventListener("click",editPostHandler)
})