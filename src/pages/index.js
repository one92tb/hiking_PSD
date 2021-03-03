import * as React from 'react';
import Layout from '../components/Layout/layout';
import Intro from './Intro/index';
import LetsGo from './LetsGo/index';
import Offer from './Offer/index';
import Description from './Description/index';
import Explore from './Explore/index';

const IndexPage = () => (
  <Layout>
    <Intro />
    <LetsGo />
    <Offer />
    <Description />
    <Explore />
  </Layout>
);

export default IndexPage;
