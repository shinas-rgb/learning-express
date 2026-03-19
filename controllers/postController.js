let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
  { id: 4, title: "post four" },
];

// @des get all posts
// @route GET /api/posts
export const getAllPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
}

// @des get single post
// @route GET /api/posts/id
export const getPost = (req, res, next) => {
  let id = parseInt(req.params.id);
  const post = posts.find((post) => post.id == id);
  if (!post) {
    const error = new Error(`Post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
}

// @des update single post
// @route PUT /api/posts/id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
}

// @des post new post
// @route POST /api/posts/
export const createPost = (req, res, next) => {
  if (!req.body || !req.body.title) {
    const error = new Error(`Error occured when creating new post`);
    error.status = 400;
    return next(error);
  };

  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  posts.push(newPost);
  res.status(201).json(posts);
}

// @des delte a post
// @route DELTE /api/posts/id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
}
