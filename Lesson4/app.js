const posts = [
  { title: 'Post one', body: 'post one' },
  { title: 'Post two', body: 'post two' }
];

function createPost(post, callBack) {}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post three', body: 'post three' }, getPosts);
