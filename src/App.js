import React from 'react';
import './App.css';
import Header from './components/Header/';
import MainForm from './components/MainForm/';
import ConversionPercentage from './components/ConversionPercentage/';
import Commentary from './components/Commentary/';

function App() {
  return (
    <>
      <Header />
      <MainForm />
      <ConversionPercentage />
      <Commentary />
    </>
  );
}

export default App;
