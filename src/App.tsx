import React from 'react';

import Parent1 from './ChildToParent/Parent'
import Parent2 from './ParentToChild/Parent'

import { CardContainer } from './styles';

const App: React.FC = () => (
  <CardContainer>
    <Parent1 name={"Mufasa"}></Parent1>
    <Parent2 name={"Marlin"}></Parent2>
  </CardContainer>
);

export default App;
