const newPostHandler = async (event) => {
    event.preventDefault();

    const form = document.querySelector("#form");

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// clikck btn new post show form create post
document.querySelector(".btn-new-post").addEventListener("click", newPostHandler);