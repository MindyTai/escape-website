import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import ScrollBtn from './components/ScrollBtn';
import Content from './components/Content/IndexPage';


const App = () => (
  <div>
    <Header />
    <Content />
    <Footer />
    <ScrollBtn />
  </div>
);


export default App;
