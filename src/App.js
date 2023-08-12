import Form1 from "./component/form1";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-cont">
        <img src="tata-logo.png" alt="tatalogo" className="logo" />
        <h2 className="head2">BATCH IDENTIFICATION SYSTEM</h2>
        <img
          src="https://www.tatapowersolar.com/wp-content/themes/tpsolar/assets/images/tata-power-solar-logo.jpg"
          className="tatalogo"
          alt="tata-head"
        />
      </div>
      <Form1 />
    </div>
  );
}

export default App;
