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
    
}