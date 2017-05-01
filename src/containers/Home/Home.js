import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from './../../reducers/posts/actions'

class Home extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return Object.keys(this.props.posts).map(postKey => (
      <li className='list-group-item' key={postKey}>
        {this.props.posts[postKey].title}
      </li>
    ))
  }

  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    posts: state.posts
  }),
  {
    fetchPosts
  }
)(Home)
