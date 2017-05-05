import { getPost } from './selectors'

test('getPost() return a specific post given an ID', () => {
  const id = 1
  const posts = {
    '333': {
      id: '333'
    },
    [id]: {
      id
    }
  }
  const actual = getPost(posts, id)
  const expected = posts[id]

  expect(actual).toEqual(expected)
})
