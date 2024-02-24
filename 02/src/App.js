// import logo from './logo.svg';
import './App.css';
import Navba from './components/Navba';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState('light');

  function toggleMode() {
    if (darkMode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <div>
      <Navba title={"TextUtils"} about="About Us" mode={darkMode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading={"Enter the text to analyze"} />
      </div>
      <div className="container">
        <About />
      </div>
    </div>
  );
}



export default App;
