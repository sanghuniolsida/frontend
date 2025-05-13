import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Main.css';

function Main({ children }) {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-scroll">{children}</main>
      <Footer />
    </div>
  );
}

export default Main;
