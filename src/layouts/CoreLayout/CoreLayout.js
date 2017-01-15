import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './CoreLayout.scss';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div className="core-layout container">
    <Header />
    <main className="core-layout__main main-content">
      <Sidebar className="main-content__sidebar" />
      <div className="main-content__wrapper">{children}</div>
    </main>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout;
