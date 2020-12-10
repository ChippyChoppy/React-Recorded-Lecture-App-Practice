import React from 'react';
import logo from './logo.svg';
import Header from './Header'
import './App.css';

function App() {
  const instructor_names = ["Steven", "Caryn", "Greg", "Tashawn"]
  return (
      <Header instructors={instructor_names} />  
  );
}

export default App;
