// clikck btn new post show form create post
const newPostHandler = async () => {

    const form = document.querySelector("#form");

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
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

document.querySelector("#btn-create-post").addEventListener("click", createPostHandler)

document.querySelector(".btn-new-post").addEventListener("click", newPostHandler);