import reducer, { INITIAL_STATE } from './reducer'
import * as actions from './actions'

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it(`it should handle ${actions.FETCH_POSTS}`, () => {
    const fetchPostsActionResult1 = {
      type: actions.FETCH_POSTS,
      payload: {
        1: {
          id: 1,
          test: '_1'
        }
      }
    }
    const fetchPostsActionResult2 = {
      type: actions.FETCH_POSTS,
      payload: {
        2: {
          id: 2,
          test: '_2'
        }
      }
    }

    expect(reducer(undefined, fetchPostsActionResult1)).toEqual(
      fetchPostsActionResult1.payload
    )

    expect(
      reducer(fetchPostsActionResult1.payload, fetchPostsActionResult2)
    ).toEqual({
      ...fetchPostsActionResult1.payload,
      ...fetchPostsActionResult2.payload
    })
  })

  it(`it should handle ${actions.FETCH_POST}`, () => {
    const fetchPostActionResult = {
      type: actions.FETCH_POST,
      payload: {
        1: {
          id: 1,
          test: '_1'
        }
      }
    }

    expect(reducer(undefined, fetchPostActionResult)).toEqual({
      ...fetchPostActionResult.payload
    })
  })

  it(`it should handle ${actions.DELETE_POST}`, () => {
    const id = 2
    const initState = {
      1: {
        id: 1,
        test: '_1'
      },
      [id]: {
        id,
        test: '_2'
      }
    }
    const expectedState = {
      1: {
        id: 1,
        test: '_1'
      }
    }
    const action = { type: actions.DELETE_POST, payload: id }

    expect(reducer(initState, action)).toEqual({
      ...expectedState
    })
  })
})
