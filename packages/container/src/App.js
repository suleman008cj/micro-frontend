import React from 'react';
import MarketingApp from './compoenents/MarketingApp';
import Header from './compoenents/Header';
import { BrowserRouter } from 'react-router-dom';
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
