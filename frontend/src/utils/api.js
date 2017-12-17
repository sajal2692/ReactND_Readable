const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

//TODO: Probably not needed? or needed when this page is directly navigated to
export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.reduce((posts, post) => {
      posts[post.id] = post
      return posts
    },{}))

//TODO: Post /posts
//TODO: Can probably generate uuid above

export const getPostByID = (postId) =>
  fetch (`${api}/posts/${postId}`, { headers })
  .then(res => res.json())


//TODO: POST /posts/:id (for voting)

export const votePost = (postId, voteType) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      option: voteType
    })}
  )
  .then(res => res.json())

//TODO: PUT /posts/:id (edit post)
//TODO: DELETE /posts/:id

export const getCommentsByPost = (postId) =>
  fetch (`${api}/posts/${postId}/comments`, { headers })
  .then(res => res.json())

//TODO: POST /comments
//TODO: GET /comments/:id

export const getCommentByID = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
  .then(res => res.json())

//TODO: POST /comments/:id
//TODO: PUT /comments/:id
//TODO: DELETE /comments/:id
