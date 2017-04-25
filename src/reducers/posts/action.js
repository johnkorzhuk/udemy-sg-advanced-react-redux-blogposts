// @flow
import axios from 'axios'
import type { ThunkAction } from './../types'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/app'
const API_KEY = '?key=johnkorz1'

export function fetchPosts (): ThunkAction {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${ROOT_URL}/posts${API_KEY}`)
      return dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    } catch (e) {
      console.error(e)
    }
  }
}
