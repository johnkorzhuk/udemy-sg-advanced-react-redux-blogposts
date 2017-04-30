import PostService from './../../services/posts/posts'

export const FETCH_POSTS = 'posts/FETCH_POSTS'
export const CREATE_POSTS = 'posts/CREATE_POSTS'

export function fetchPosts () {
  return async dispatch => {
    try {
      const data = await PostService.invokePostsApi({
        path: 'posts',
        method: 'get'
      })

      return dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    } catch (e) {
      console.error(e)
    }
  }
}
