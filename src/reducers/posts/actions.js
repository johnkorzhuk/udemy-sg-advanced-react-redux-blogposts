import PostService from './../../services/posts/posts'
import { mapKey } from './../../utils/utils'

export const FETCH_POSTS = 'posts/FETCH_POSTS'
export const FETCH_POST = 'posts/FETCH_POST'
export const CREATE_POSTS = 'posts/CREATE_POSTS'
export const DELETE_POST = 'posts/DELETE_POST'

export function deletePost (id) {
  return async dispatch => {
    try {
      await PostService.delete({
        path: `posts/${id}`
      })

      return dispatch({
        type: DELETE_POST,
        payload: id
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export function fetchPosts () {
  return async dispatch => {
    try {
      const payload = await PostService.get({
        path: 'posts'
      })

      return dispatch({
        type: FETCH_POSTS,
        payload: mapKey(payload, 'id')
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export function fetchPost (id) {
  return async dispatch => {
    try {
      const payload = await PostService.get({
        path: `posts/${id}`
      })
      return dispatch({
        type: FETCH_POST,
        payload: mapKey(payload, 'id')
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export function createPost (values) {
  return async dispatch => {
    try {
      const payload = await PostService.post({
        path: 'posts',
        body: values
      })

      return dispatch({
        type: CREATE_POSTS,
        payload: mapKey(payload, 'id')
      })
    } catch (e) {
      console.error(e)
    }
  }
}
