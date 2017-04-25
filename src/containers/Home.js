// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from './../reducers/posts/action'

class Home extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return <div>posts</div>
  }
}

export default connect(null, {
  fetchPosts
})(Home)
