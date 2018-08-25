import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Layout from './Layout';

export default withRouteData(({ post }) => (
  <Layout>
    <Link to="/blog/">{'<'} Back</Link>
    <br/>
    <h3>{post.title}</h3>
    {convert(post.contents)}
  </Layout>
));
