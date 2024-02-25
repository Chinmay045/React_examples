// import logo from './logo.svg';
import './App.css';
import Navba from './components/Navba';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts.jsx';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (darkMode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <div>
      <Navba title={"TextUtils"} about="About Us" mode={darkMode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
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
