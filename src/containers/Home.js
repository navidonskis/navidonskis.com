import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';
import Layout from './Layout';

export default withRouteData(({ home }) => {
  const { title, description, contents } = home;
  // const location = typeof window !== "undefined" && window.location || {};
  // console.log(location);

  return (
    <Layout head={{ title, description }}>
      {convert(contents)}
    </Layout>
  );
});
