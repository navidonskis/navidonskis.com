import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';
import Layout from './Layout';

export default withRouteData(({ home }) => {
  const { title, description, contents } = home;

  return (
    <Layout head={{ title, description }}>
      {convert(contents)}
    </Layout>
  );
});
