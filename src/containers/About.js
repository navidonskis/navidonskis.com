import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Layout from './Layout';
import bgImage from '../images/bg-02.jpg';

export default withRouteData(({ about }) => {
  const { title, description, contents } = about;

  return (
    <Layout head={{ title, description }} bg={bgImage} className="layout about">
      {convert(contents)}
    </Layout>
  );
});

