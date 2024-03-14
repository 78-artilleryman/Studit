import { css } from 'styled-components';

const myReset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
  }

  html,
  body {
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    color: var(--gray900);
    font-weight: 400;
    min-height: 100vh;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
    font-family: 'NotoSansKR';
  }

  input {
    outline: 0;
    border: 0;
  }

  fieldset {
    border: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .ir_so {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  }
`;

export default myReset;
