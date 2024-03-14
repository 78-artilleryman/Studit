import { createGlobalStyle } from 'styled-components';
import myReset from './myReset';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${reset}
	${myReset}
`;
