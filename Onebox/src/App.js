import React from 'react';
import LoginPage from './components/LoginPage'; // Adjust the import to reflect the correct path
import './App.css'; // Global styles if any

const App = () => {
  return (
    <div className="App">
      <LoginPage />  {/* Renders the LoginPage component */}
    </div>
  );
};

export default App;
