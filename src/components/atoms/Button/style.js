import styled, { css } from 'styled-components';

/* const handleBtnSize = (size) => {
  switch (size) {
  case 'small':
    console.log('ccc');
    return 'padding: 5.1em 1.3em';
  case 'large':
    console.log('aaa');
    return 'padding: 5.1em 1.3em';
  case 'medium':
    console.log('abbaa');
    return 'padding: 14em 1.3em';
  default:
    return 'padding: 0.15em 0.13em';
  }
}; */

const ButtonStyle = styled.button`
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    display: block;
    font-family: var(--base-font-family);
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    position: relative;

    ${({ size }) => {
    console.log(size);
    // eslint-disable-next-line no-unused-expressions
    size === 'small' && 'padding: 5.1em 1.3em';
  }};
`;

const Small = css`
    padding: 0.5em 1.6em;
`;

const Medium = css`
    padding: 1.1em 1.3em;
`;

const Large = css`
    padding: 5.7em 5.4em;
`;

const Default = css`
    color: rgb(23, 51, 206);
    background: blue;
`;

const Rounded = css`
    background: rgb(255, 14, 14);
    border: 1px solid var(--brand);
    transition: color 0.3s ease, background 0.3s ease;
`;

export {
  ButtonStyle,
  Small,
  Medium,
  Large,
  Default,
  Rounded,
};
