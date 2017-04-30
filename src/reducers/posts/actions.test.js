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

  it('creates a FETCH_POSTS action with the appropriate data', async () => {
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
})
