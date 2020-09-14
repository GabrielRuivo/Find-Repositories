// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';

/* BrowserRouter => Permite acessar as nossas pages atraves das rotas com o /
  ex: localhost:2000/repository ,
      localhost:2000/dashboard
  etc...
*/

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
