import { FETCH_POSTS, FETCH_POST, DELETE_POST } from './actions'
import { deleteKey } from './../../utils/utils'

export const INITIAL_STATE = {}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.payload
      }

    case FETCH_POST:
      return {
        ...state,
        ...action.payload
      }

    case DELETE_POST:
      return deleteKey(state, action.payload)

    default:
      return state
  }
}
