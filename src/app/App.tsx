import React from 'react';
import Form from '../components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="logo">
        <h1>Genderize</h1>
        <h2>check the gender of a name</h2>
      </div>
      <Form></Form>
    </div>
  );
}

export default App;
