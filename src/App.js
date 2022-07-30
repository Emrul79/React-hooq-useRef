import React from "react";
import "./App.css";
import Myfunc from "./components/First";
import My from "./components/Second";
import { ReactBootstrap } from "./components/Reactbootstrap/ReactBootstrap";
import State from "./components/State";
import ConditionalRender from "./ConditionalReandering/Index";
import Handler from "./EventHandler/Handler";
import Binding from "./EventHandler/Binding";
import Hooq from "./Hooqs/Hooq";
import Form from "./components/Form/Form";
import Child from "./StateLifting/Child";
import Home from "./StateLifting/Home";
import Toggole from "./Toggole/Toggole";
import Faq from "./FAQ/Faq";
import Useeffect from "./Useeffect/Useeffect";
import Countryapp from "./Countryapp/Countryapp";
import Search from "./Countryapp/Search";
import Main from "./Countryapp2/Main";
import Useref from "./UseRef/useref";
import Reducer from "./Usereducer/reducer";
import ActuallReducer from "./Usereducer/actuallReducer";
import Dada from "./Usereducer/Dada";
import Proptypes from "./Usereducer/Proptypes";
import Mainrouters from "./Routers/Mainrouters";
import Webpage from "./Routers/Webpage";
function App() {

   
  return (
    <div>
      <Mainrouters/>
      {/* <Webpage/> */}
    </div>
  );
}

export default App;
