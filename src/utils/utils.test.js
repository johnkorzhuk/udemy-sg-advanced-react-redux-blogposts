import { mapKey, deleteKey } from './utils'

test('mapKey() returns a map given an array of objects and a key', () => {
  const key = 'id'
  const obj = {
    [key]: 1,
    _: '_'
  }
  const expected = {
    [obj[key]]: obj
  }
  const actual = mapKey([obj], 'id')

  expect(actual).toEqual(expected)
})

test('deleteKey() deletes a given key from an oject without mutations', () => {
  const key = '123'
  const obj = {
    '321': {
      id: '321'
    },
    [key]: {
      id: key
    }
  }
  const expected = {
    '321': {
      id: '321'
    }
  }
  const actual = deleteKey(obj, key)

  expect(actual).not.toBe(obj)
  expect(actual).toEqual(expected)
})
