class BlogPost {
  constructor({ id, title, content, timestamp }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp || new Date().toISOString();
  }
}

let posts = [
  new BlogPost({
    id: 1,
    title: "Using express.Router",
    content: "Modularizing routes keeps Express applications clean and maintainable.",
    timestamp: new Date().toISOString(),
  }),
  new BlogPost({
    id: 2,
    title: "REST API Validation",
    content: "Always validate inputs and return meaningful HTTP status codes.",
    timestamp: new Date().toISOString(),
  }),
];

let nextId = 3;

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => post.id === id) || null;
}

function createPost({ title, content }) {
  const newPost = new BlogPost({
    id: nextId++,
    title: title.trim(),
    content: content.trim(),
    timestamp: new Date().toISOString(),
  });
  posts.push(newPost);
  return newPost;
}

function updatePostById(id, { title, content }) {
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  if (title !== undefined) {
    post.title = title.trim();
  }
  if (content !== undefined) {
    post.content = content.trim();
  }
  post.timestamp = new Date().toISOString();

  return post;
}

function deletePostById(id) {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const [deletedPost] = posts.splice(index, 1);
  return deletedPost;
}

module.exports = {
  BlogPost,
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};