import * as React from 'react';
import Layout from '../components/Layout/layout';
import Intro from './Intro/index';
import LetsGo from './LetsGo/index';
import Offer from './Offer/index';
import Description from './Description/index';
import Explore from './Explore/index';
import Quotation from './Quotation/index';
import Subscribe from './Subscribe/index';
import Footer from './Footer/index';

const IndexPage = () => (
  <Layout>
    <Intro />
    <LetsGo />
    <Offer />
    <Description />
    <Explore />
    <Quotation />
    <Subscribe />
    <Footer />
  </Layout>
);

export default IndexPage;
