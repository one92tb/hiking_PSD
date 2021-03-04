import React from 'react';
import Input, { InputColor, InputSize } from '../../atoms/Input/index';
import Button, { ButtonPosition, ButtonSize, ButtonTheme } from '../../atoms/Button/index';
import './style.css';

const SubscribeForm = () => (
  <div className="subscribeForm">
    <Input type="text" size={InputSize.LARGE} color={InputColor.LIGHT} />
    <Button
      size={ButtonSize.MEDIUM}
      theme={ButtonTheme.DARK}
      position={ButtonPosition.SUBSCRIBE}
    >
      subscribe
    </Button>
  </div>
);

export default SubscribeForm;
