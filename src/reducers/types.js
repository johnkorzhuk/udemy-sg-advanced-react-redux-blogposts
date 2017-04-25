// @flow
import type { PostsActions } from './posts/types'

export type Action = PostsActions

export type GetState = () => Object
export type PromiseAction = Promise<Action>
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any
