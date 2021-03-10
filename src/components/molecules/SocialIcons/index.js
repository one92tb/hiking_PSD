import React from 'react';
import {
  faInstagram, faFacebookF, faTwitter, faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import IconBox from '../IconBox/index';
import './style.css';

const SocialIcons = () => (
  <div className="socialIcons">
    {[faInstagram, faFacebookF, faTwitter, faWhatsapp]
      .map((icon) => (
        <IconBox
          key={icon.iconName}
          icon={icon}
        />
      ))}
  </div>
);

export default SocialIcons;
