import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as actions from './actions'
import { api } from './../../services/posts/posts'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  beforeEach(() => {
    moxios.install(api)
  })
  afterEach(() => {
    moxios.uninstall(api)
  })

  it('calling actions.fetchPosts() creates a FETCH_POSTS action', async () => {
    const store = mockStore({})
    const payload = {
      1: { id: 1 }
    }
    const expectedActions = [{ type: actions.FETCH_POSTS, payload }]

    moxios.stubRequest(/posts.*/, {
      status: 200,
      response: [{ id: 1 }]
    })

    await store.dispatch(actions.fetchPosts())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('calling actions.fetchPost() creates a FETCH_POST action', async () => {
    const store = mockStore({})
    const id = 1
    const payload = {
      [id]: { id }
    }
    const expectedActions = [{ type: actions.FETCH_POST, payload }]

    moxios.stubRequest(/posts.*/, {
      status: 200,
      response: [{ id }]
    })

    await store.dispatch(actions.fetchPost(id))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('calling actions.deletePost() creates a DELETE_POST action', async () => {
    const store = mockStore({})
    const id = 1
    const expectedActions = [{ type: actions.DELETE_POST, payload: id }]

    moxios.stubRequest(/posts.*/, {
      status: 200,
      response: {}
    })

    await store.dispatch(actions.deletePost(id))

    return expect(store.getActions()).toEqual(expectedActions)
  })
})
