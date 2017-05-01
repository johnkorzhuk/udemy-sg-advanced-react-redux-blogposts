import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'

import './NewPost.css'

class NewPost extends PureComponent {
  _handleSubmit = values => {
    console.log(values)
  }

  renderField ({ input, meta: { form, error, touched }, label }) {
    const containerClassName = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={containerClassName}>
        <label className='NewPost' htmlFor={`${form}-${input.name}`}>
          {label}
        </label>
        <input
          className='form-control'
          id={`${form}-${input.name}`}
          type='text'
          {...input}
        />
        <div className='text-help'>
          {touched && error}
        </div>
      </div>
    )
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this._handleSubmit)}>
        <Field label='Title' name='title' component={this.renderField} />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field label='Content' name='content' component={this.renderField} />
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    )
  }
}

export const validate = values => {
  const error = {}

  if (!values.title) error.title = 'A title is required.'
  if (!values.content) error.content = 'Some content is required.'

  return error
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(NewPost)
