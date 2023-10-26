// Найти все элементы с классом "date"
const dateElements = document.querySelectorAll('.date');
const imageElements = document.querySelectorAll('.image')
const postElements = document.querySelectorAll('.post')
const contentElements = document.querySelectorAll('.content')
function makePost(date, content, image) {
    return {
        date: date,
        content: content,
        image: image
    };
}
let numberOfPosts = dateElements.length;

const posts = [];
for (let i = 0; i < numberOfPosts; i++) {
    let post = makePost(0,0, "");
    posts.push(post);
}
const postsWithImages = new Array(numberOfPosts);

postElements.forEach((postElement, index) => {
        const childElements = postElement.querySelectorAll('*');
        if (childElements.length === 8) {
            postsWithImages[index] = 1;
        } else postsWithImages[index] = 0;
    }
)
console.log(postsWithImages);

dateElements.forEach((dateElement, index) => {
    posts[index].date = dateElement.textContent;
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

for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
}