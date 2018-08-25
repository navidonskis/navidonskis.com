import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';
import Layout from './Layout';

export default withRouteData(({ home }) => (
  <Layout>
    {convert(home.contents)}
  </Layout>
));
