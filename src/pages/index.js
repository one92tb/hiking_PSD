import React, { useRef } from 'react';
import Layout from '../components/layout/layout';
import Intro from './Intro/index';
import LetsGo from './LetsGo/index';
import Offer from './Offer/index';
import Description from './Description/index';
import Explore from './Explore/index';
import Quotation from './Quotation/index';
import Subscribe from './Subscribe/index';
import Footer from './Footer/index';

const IndexPage = () => {
  const refs = {
    home: useRef(null),
    menu: useRef(null),
    'our story': useRef(null),
    'contact us': useRef(null),
  };

  return (
    <Layout>
      <Intro refs={refs} />
      <LetsGo ref={refs.home} />
      <Offer ref={refs.menu} />
      <Description ref={refs['our story']} />
      <Explore />
      <Quotation />
      <Subscribe ref={refs['contact us']} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
