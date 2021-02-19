import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header/index';
import Jumbotron from '../../organisms/Jumbotron/index';

const IntroTemplate = (props) => {
  const { bodyText } = props;
  return (
    <section>
      <Header />
      <Jumbotron text={bodyText} />
    </section>
  );
};

IntroTemplate.defaultProps = {
  bodyText: 'lorem ipsum dolor',
};

IntroTemplate.propTypes = {
  bodyText: PropTypes.string,
};

export default IntroTemplate;
