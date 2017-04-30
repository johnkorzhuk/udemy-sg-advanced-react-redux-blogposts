import reducer, { INITIAL_STATE } from './reducer'
import * as actions from './actions'

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it(`it should handle ${actions.FETCH_POSTS}`, () => {
    const fetchPostActionResult1 = {
      type: actions.FETCH_POSTS,
      payload: {
        1: {
          id: 1,
          test: '_1'
        }
      }
    }
    const fetchPostActionResult2 = {
      type: actions.FETCH_POSTS,
      payload: {
        2: {
          id: 2,
          test: '_2'
        }
      }
    }

    expect(reducer(undefined, fetchPostActionResult1)).toEqual(
      fetchPostActionResult1.payload
    )

    expect(
      reducer(fetchPostActionResult1.payload, fetchPostActionResult2)
    ).toEqual({
      ...fetchPostActionResult1.payload,
      ...fetchPostActionResult2.payload
    })
  })
})
