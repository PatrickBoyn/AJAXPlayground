const posts = [
    { title: 'Post one', body: 'post one' },
    {title: 'Post two', body: 'post two'}
];

function createPost(post, callBack) {
    setTimeout(function () {
        posts.push(post);
        callBack();
    }, 2000);
}

function getPosts() {
    
}

createPost({title: 'Post three', body: 'post three'}, getPosts);