import React from 'react';

import DeckWithControlls from './DeckWithControlls';

import serverData from '../server';

const DeckWithControllsContainer = () => (
  <DeckWithControlls items={serverData.serpData} />
);

export default DeckWithControllsContainer;
