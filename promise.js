const posts = [
  {
    title: "Post1",
    data: "This is post 1",
  },
  {
    title: "Post2",
    data: "This is post 2",
  },
];

function getPost() {
  setTimeout(() => {
    let data = "";
    for (let i = 0; i < posts.length; i++) {
      data = data + `<li>${posts[i].title}: ${posts[i].data}</li>`;
    }
    document.body.innerHTML = data;
  }, 1000);
}

function createPost(data) {
  const err = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        resolve(posts.push(data));
      } else {
        reject("Something went wrong! can not create the post");
      }
    }, 2000);
  });
}
function deletePost() {
  const del = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (del) {
        resolve(posts.pop());
      } else {
        console.log("something went wrong! Can not delete the post");
      }
    }, 1000);
  });
}
createPost({ title: "Post3", data: "This is post 3" })
  .then(createPost({ title: "Post4", data: "This is post 4" }))
  .then(getPost)
  .catch((err) => {
    console.log(err);
  });

//deletePost().then(getPost);

createPost({ title: "Post5", data: "This is post 5" })
  .then(getPost)
  .then(deletePost)
  .then(getPost)
  .catch((err) => {
    console.log(err);
  });
