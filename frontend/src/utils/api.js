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

export const addNewPost = post =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      body: post.body,
      author: post.author,
      title: post.title,
      category: post.category
    })
  }).then(res => res.json());




export const getPostByID = (postId) =>
  fetch (`${api}/posts/${postId}`, { headers })
  .then(res => res.json())


export const votePost = (postId, voteType) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      option: voteType
    })}
  )
  .then(res => res.json())

export const editPost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      body: post.body,
      title: post.title,
    })
  }).then(res => res.json());

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: headers
  })
  .then(res => res.json())


export const getCommentsByPost = (postId) =>
  fetch (`${api}/posts/${postId}/comments`, { headers })
  .then(res => res.json())
  .then(data => data.reduce((comments, comment) => {
    comments[comment.id] = comment
    return comments
  },{}))


export const addNewComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
    })
  })
  .then(res => res.json())

//TODO: GET /comments/:id

export const getCommentByID = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
  .then(res => res.json())

  export const voteComment = (commentId, voteType) =>
    fetch(`${api}/comments/${commentId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        option: voteType
      })}
    )
    .then(res => res.json())


export const editComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({
      timestamp: comment.timestamp,
      body: comment.body
    })}
  )
  .then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  })
  .then(res => res.json())
