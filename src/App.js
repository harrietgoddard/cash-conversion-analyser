import React from 'react';
import './App.css';
import Header from './components/Header/';
import MainForm from './components/MainForm/';
import ConversionPercentage from './components/ConversionPercentage/';

function App() {
  return (
    <>
      <Header />
      <MainForm />
      <ConversionPercentage />
    </>
  );
}

export default App;
