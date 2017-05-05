import axios from 'axios'

export const API_KEY = '?key=johnkorz11'

export const api = axios.create({
  baseURL: 'https://reduxblog.herokuapp.com/api'
})

class PostsService {
  async get ({ path }) {
    try {
      const { data } = await api({
        method: 'get',
        url: `${path}${API_KEY}`
      })

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async post ({ path, body }) {
    try {
      const { data } = await api({
        method: 'post',
        url: `${path}${API_KEY}`,
        data: body
      })

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async delete ({ path }) {
    try {
      const { data } = await api({
        method: 'delete',
        url: `${path}${API_KEY}`
      })

      return data
    } catch (e) {
      console.error(e)
    }
  }
}

export default new PostsService()
