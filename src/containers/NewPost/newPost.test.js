import { validate } from './NewPost'

describe('<NewPost />', () => {
  const validValues = {
    title: 'abc',
    categories: 'abc',
    content: 'abc'
  }
  const invalidValues = {
    title: undefined,
    categories: undefined,
    content: undefined
  }

  it('validates the form input', () => {
    expect(validate(validValues)).toEqual({})
    expect(validate(invalidValues)).toEqual({
      title: expect.any(String),
      content: expect.any(String)
    })
  })
})
