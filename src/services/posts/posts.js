import axios from 'axios'

import { mapKey } from './utils'

export const API_KEY = '?key=johnkorz1'

export const api = axios.create({
  baseURL: 'http://reduxblog.herokuapp.com/api'
})

class PostsService {
  async invokePostsApi ({ path, method, body }) {
    try {
      const { data } = await api[method](`${path}${API_KEY}`)

      return mapKey(data, 'id')
    } catch (e) {
      console.error(e)
    }
  }
}

export default new PostsService()
