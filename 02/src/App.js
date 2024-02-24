// import logo from './logo.svg';
import './App.css';
import Navba from './components/Navba';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <div>
      <Navba title={"TextUtils"} about="About Us" />
      <div className="container">
        {/* <TextForm heading={"Enter the text to analyze"} /> */}
      </div>
      <div className="container">
        <About />
      </div>
    </div>
  );
}



export default App;
