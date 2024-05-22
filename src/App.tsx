import React from 'react';
import { GlobalStyle } from './components/design-system/GlobalStyle';
import { Wurdle } from './components/Wurdle';

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle key="global_styles" />
      <Wurdle key="canvas" />
    </React.Fragment>
  );
};
