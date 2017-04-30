import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from './../reducers/posts/actions'

class Home extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div>
        <div>
          <Link to='/posts/new' className='btn btn-primary'>Create</Link>
        </div>
        posts
      </div>
    )
  }
}

export default connect(null, {
  fetchPosts
})(Home)
