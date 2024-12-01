import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Edit <code>src/App.jsx</code> and save to reload.</p>
        <ButtonComponent />  // This adds the button component to your app
      </header>
    </div>
  );
}

export default App
