import { mapKey } from './utils'

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
