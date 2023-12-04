import "./App.css";
import { useState } from "react";
import { data } from "./data/data";
import ImcCalc from "./components/imcCalc";
import ImcClass from "./components/ImcClass";

function App() {

  const calcImc = (e, heigth, weigth)=>{
    e.preventDefault();

    const heigthFloat = +heigth.replace(",", ".");
    const weigthFloat = +weigth.replace(",", ".");

    if(!heigth || !weigth) return;

    const imcResult = (weigthFloat / (heigthFloat * heigthFloat)).toFixed(2);

    console.log(imcResult);
    setImc(imcResult)
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return <div className="container">{!imc ? <ImcCalc calcImc={calcImc}/> : <ImcClass data={data}/>}</div>;
}

export default App;
