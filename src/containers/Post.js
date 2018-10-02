import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Layout from './Layout';
import Moment from 'moment';
import bgImage from '../assets/bg-01.jpg';

class Post extends Component {
  render () {
    const { post } = this.props;
    const { title, description } = post;
    const url = "undefined" !== typeof window ? window.location : '/';
    const bg = post.bg ? post.bg : bgImage;

    return (
      <Layout bg={bg} head={{ title, description }}>
        <article itemScope itemType="http://schema.org/Article" itemProp="mainEntityOfPage" className="blog__post">
          <meta itemProp="url" content={url}/>
          <meta itemProp="image" content={bg.toString()}/>

          <h1 itemProp="name headline">{title}</h1>
          {post.date && <span className="blog__post--date">
            {new Moment(post.date).format('MMM Do, YYYY')}
          </span>}
          <hr/>

          <section className="blog__post--content">
            {convert(post.contents)}
          </section>
        </article>
      </Layout>
    );
  }
}

export default withRouteData(Post);
