const posts = [
    { title: 'Post one', body: 'post one' },
    {title: 'Post two', body: 'post two'}
];

function createPost(post) {
    setTimeout(function () {
        posts.push(post);
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = '';

        post.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({ title: 'Post Three', body: 'This is post three.' });