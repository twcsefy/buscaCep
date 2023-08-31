import React from 'react';

import Header from './componets/Header';
import Footer from './componets/Footer';
import BuscaCep from './componets/BuscaCEPForm';

import styles from'./App.module.css';

function App() {
  return (
  <div>
    <Header />
       <main className={styles.main}>
        <BuscaCep />
       </main>
    <Footer />
  </div>
  );
}

export default App;
