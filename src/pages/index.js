import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Subtitle, { SubtitleSize, SubtitleColor } from '../components/atoms/Subtitle/index';
import Input, { InputSize, InputColor } from '../components/atoms/Input/index';

const IndexPage = () => (
  <div>
    <FontAwesomeIcon icon={faSearch} className="size" />
    <Subtitle size={SubtitleSize.INTRO} color={SubtitleColor.DARK_1}>loremipsum dolor</Subtitle>
    <Input size={InputSize.SMALL} color={InputColor.DARK} />
  </div>
);

export default IndexPage;
