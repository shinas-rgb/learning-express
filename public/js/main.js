const output = document.querySelector('#output');
const getPosts = document.querySelector('#get-posts-btn');
const form = document.querySelector('#add-post-form');

async function showPosts() {
  const res = await fetch('http://localhost:8080/api/posts');
  if (!res.ok) {
    throw new Error;
  }
  const posts = await res.json();
  output.innerHTML = "";
  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('postBox');
    postEl.textContent = post.title;
    output.appendChild(postEl);
  })
}

async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get('title');

  try {
    const res = await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ title })
    });

    if (!res.ok) {
      throw new Error('Error');
    }

    const newPost = await res.json();
    const postEl = document.createElement('div');
    postEl.classList.add('postBox');
    postEl.textContent = newPost.title;
    output.appendChild(postEl);

    showPosts();
  } catch (error) {
    console.log("error adding post");
  }
}

getPosts.addEventListener('click', showPosts);
form.addEventListener('submit', addPost);
