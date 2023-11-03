const dateElements = document.querySelectorAll('.date');
const authorElements = document.querySelectorAll('.author')
const imageElements = document.querySelectorAll('.image')
const postElements = document.querySelectorAll('.post')
const contentElements = document.querySelectorAll('.content')
function makePost(date, author,  content, image) {
    return {
        date: date,
        author: author,
        content: content,
        image: image
    };
}
let numberOfPosts = dateElements.length;

const posts = [];
for (let i = 0; i < numberOfPosts; i++) {
    let post = makePost(0, "", 0, "");
    posts.push(post);
}
const postsWithImages = new Array(numberOfPosts);

postElements.forEach((postElement, index) => {
        const childElements = postElement.querySelectorAll('*');
        if (childElements.length === 9) {
            postsWithImages[index] = 1;
        } else postsWithImages[index] = 0;
    }
)

dateElements.forEach((dateElement, index) => {
    posts[index].date = dateElement.textContent;
});

authorElements.forEach((authorElement, index) => {
    posts[index].author = authorElement.textContent;
});

contentElements.forEach((contentElement, index) => {
    posts[index].content = contentElement.textContent;
});

imageElements.forEach((imageElement, index) => {
    for (let i = 0; i < postsWithImages.length; i++) {
        if (postsWithImages[i] === 1 && posts[i].image === "") {
            posts[i].image = imageElement["src"];
        }
    }
});