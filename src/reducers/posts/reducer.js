import { FETCH_POSTS } from './action'
import type { Action } from './action'

type State = {
  +all: Array<any>,
  +posts: ?string,
}

const INITIAL_STATE = {
  all: [],
  posts: null
}

export default function (state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      }

    default:
      return state
  }
}
