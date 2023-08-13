import Form1 from "./component/form1";
import Lpdiffusion from "./component/Lpdiffusion";
import Ldse from "./component/Ldse";
import WeEtch from "./component/EtchProcess";
import Annealing from "./component/Annealing";
import Pecvd from "./component/Pecvd";
import Lco from "./component/Lco";
import FileNot from "./component/FileNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import BackCoating from "./component/BackCoating";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form1} />
          <Route exact path="/lp" component={Lpdiffusion} />
          <Route exact path="/ldse" component={Ldse} />
          <Route exact path="/etch" component={WeEtch} />
          <Route exact path="/annealing" component={Annealing} />
          <Route exact path="/backcoating" component={BackCoating} />
          <Route exact path="/pecvd" component={Pecvd} />
          <Route exact path="/lco" component={Lco} />
          <Route component={FileNot} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
