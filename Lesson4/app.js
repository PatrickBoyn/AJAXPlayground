const posts = [
  { title: 'Post one', body: 'post one' },
  { title: 'Post two', body: 'post two' }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong.');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post three', body: 'post three' })
  .then(getPosts)
  .catch(function(error) {
    console.log(error);
  });
