import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { Form } from 'semantic-ui-react'

import '../styles/AddOrEditPost.css'

class NewPost extends Component {


  render() {
    return (
      <div>
        <Navigation/>
        <div className="post-container">
          <PageHeader className="post-header">
            Add a New Post
          </PageHeader>
          <div className="new-post-form">
            <Form>
              <Form.Input required label="Title" placeholder="The title of the post."/>
              <Form.Input required label="Author" placeholder="Your name" />
              <Form.Select required label="Category" placeholder="Category" options={["a","b"]} />
              <Form.TextArea rows={10} required label="Body" placeholder="One starry Arabian night..." />
              <Form.Button>Submit</Form.Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }

}

export default NewPost;
