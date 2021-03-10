import React from 'react';
import PropTypes from 'prop-types';
import Icon, { IconColor, IconSize } from '../../atoms/Icon/index';

import './style.css';

const IconBox = (props) => {
  const { icon } = props;
  return (
    <div className="iconBox">
      <Icon
        key={icon.iconName}
        icon={icon}
        size={IconSize.SMALL}
        color={IconColor.SOCIALMEDIA}
      />
    </div>
  );
};

export default IconBox;

IconBox.defaultProps = {
  icon: {},
};

IconBox.propTypes = {
  icon: PropTypes.object,
};
