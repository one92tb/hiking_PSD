import * as React from 'react';
import './index.css';
import Button, { ButtonType, ButtonTheme, ButtonSize } from '../components/atoms/Button/index';

const props = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.LIGHT,
  size: ButtonSize.SMALL,
  onClick: () => {},
};

const IndexPage = () => (
  <div>
    <Button {...props}>read more</Button>
    <Button {...props} size={ButtonSize.MEDIUM} theme={ButtonTheme.DARK}>subscribe</Button>
    <Button {...props} size={ButtonSize.LARGE} theme={ButtonTheme.GREY}>show more</Button>
    <Button {...props} size={ButtonSize.LARGE} theme={ButtonTheme.CREAMY}>show more</Button>
    <Button {...props} size={ButtonSize.LARGE} theme={ButtonTheme.CREAMY}>read more</Button>
  </div>
);

export default IndexPage;
