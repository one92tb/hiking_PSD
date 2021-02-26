import * as React from 'react';
import Layout from '../components/Layout/layout';
import Intro from './Intro/index';
import LetsGo from './LetsGo/index';
import Offer from './Offer/index';

const IndexPage = () => (
  <Layout>
    <Intro />
    <LetsGo />
    <Offer />
  </Layout>
);

export default IndexPage;
