// @flow
type FetchPostPayload = {
  data: Object,
}

export type PostsActions =
  | { +type: 'FETCH_POSTS', +payload: FetchPostPayload }
  | { +type: 'CREATE_POSTS', +payload: Object }
