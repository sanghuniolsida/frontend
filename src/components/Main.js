import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main({ children }) {
  return (
    <div className="app-wrapper">
      <Header />
      <main style={{ flex: 1, backgroundColor: '#f6df7b' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
