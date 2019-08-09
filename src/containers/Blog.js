import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import Layout from './Layout';
import Moment from 'moment';

class Blog extends Component {
  render () {
    const { posts } = this.props;

    return (
      <Layout>
        <h1>Blog</h1>
        <hr/>

        <ul className="list-projects">
          {posts.map(post => (
            <li key={post.slug} className="list-projects__item">
              <Link to={`/blog/${post.slug}/`}>{post.title}</Link>
              <span className="list-projects--date">{new Moment(post.date).fromNow()}</span>

              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default withRouteData(Blog);
