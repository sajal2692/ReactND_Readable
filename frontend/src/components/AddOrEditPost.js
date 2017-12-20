import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { Form } from 'semantic-ui-react'
import { capitalize } from '../utils/helpers'
import { connect } from 'react-redux'
import * as uuid4 from 'uuid/v4'
import { fetchAddPost } from '../actions/postsAction'

import '../styles/AddOrEditPost.css'

class AddOrEditPost extends Component {

  state = {
    post_title: '',
    post_author: '',
    post_category: '',
    post_body: ''
  }

  getCategories = () => {
    return this.props.categories.length > 0
    ? this.props.categories.map(category => ({
        key: category.name,
        text: capitalize(category.name),
        value: category.name
      }))
    : []
  }

  handleChange = (e, { name, value }) => this.setState({[name]: value});

  handleSubmit = () => {

    const { post_title, post_author, post_category, post_body } = this.state

    if (post_category==='') {
      alert('Please select a category.')
      return
    }

    let post = {
      id: uuid4(),
      timestamp: Date.now(),
      title: post_title,
      body: post_body,
      category: post_category,
      author: post_author,
    }

    this.props.dispatch(fetchAddPost(post));

    this.setState({
      post_title: '',
      post_author: '',
      post_category: '',
      post_body: ''
    })

  }

  render() {

    const { post_title, post_author, post_category, post_body } = this.state

    return (
      <div>
        <Navigation/>
        <div className="post-container">
          <PageHeader className="post-header">
            Add a New Post
          </PageHeader>
          <div className="new-post-form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label="Title" name='post_title' value={post_title} onChange={this.handleChange} placeholder="Post Title"/>
              <Form.Input required label="Author" name='post_author' value={post_author} onChange={this.handleChange} placeholder="Your name" />
              <Form.Select required label="Category" name='post_category' value={post_category} onChange={this.handleChange} options={this.getCategories()} />
              <Form.TextArea rows={10} required label="Body" name='post_body' value={post_body} onChange={this.handleChange} placeholder="One starry Arabian night..." />
              <Form.Button>Submit</Form.Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddOrEditPost);
