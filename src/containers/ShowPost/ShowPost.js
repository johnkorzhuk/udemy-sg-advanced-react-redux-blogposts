import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from './../../reducers/posts/actions'
import { getPost } from './../../reducers/posts/selectors'

class ShowPost extends Component {
  componentDidMount () {
    this.props.fetchPost(this.props.match.params.id)
  }

  _handleDelete = async () => {
    await this.props.deletePost(this.props.match.params.id)
    this.props.history.push('/')
  }

  render () {
    const { post } = this.props
    console.log(post)
    if (post) {
      return (
        <div>
          <Link to='/'>Home</Link>
          <button
            className='btn btn-danger pull-xs-right'
            onClick={this._handleDelete}
          >
            Delete Post
          </button>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default connect(
  ({ posts }, { match }) => ({ post: getPost(posts, match.params.id) }),
  { fetchPost, deletePost }
)(ShowPost)
