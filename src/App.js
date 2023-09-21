import Form1 from "./component/form1";
import Lpdiffusion from "./component/Lpdiffusion";
import Lldse from "./component/Ldse";
import WeEtch from "./component/EtchProcess";
import Annealing from "./component/Annealing";
import Pecvd from "./component/Pecvd";
import Lco from "./component/Lco";
import MainPage from "./component/main-page";
import LoginForm from "./component/Login_page";
import FileNot from "./component/FileNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import BackCoating from "./component/BackCoating";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/batchtex" component={Form1} />
        <Route exact path="/lp" component={Lpdiffusion} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/ldse" component={Lldse} />
        <Route exact path="/etch" component={WeEtch} />
        <Route exact path="/annealing" component={Annealing} />
        <Route exact path="/backcoating" component={BackCoating} />
        <Route exact path="/pecvd" component={Pecvd} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/lco" component={Lco} />
        <Route exact path="testing" element={<Form1 />} />
        <Route component={FileNot} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
