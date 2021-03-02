import * as React from 'react';
import Layout from '../components/Layout/layout';
import Intro from './Intro/index';
import LetsGo from './LetsGo/index';

const IndexPage = () => (
  <Layout>
    <Intro />
    <LetsGo />
  </Layout>
);

export default IndexPage;
