import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Layout from './Layout';
import bgImage from '../images/bg-02.jpg';

export default withRouteData(({ about }) => (
    <Layout bg={bgImage} className="layout about">
        {convert(about.contents)}
    </Layout>
));
