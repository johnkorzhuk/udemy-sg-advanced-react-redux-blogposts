import { FETCH_POSTS } from './actions'

export const INITIAL_STATE = {}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
