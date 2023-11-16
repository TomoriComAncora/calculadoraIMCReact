import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

function ImcCalc() {
  const [heigth, setHeigth] = useState("");
  const [weigth, setWeigth] = useState("");

  const clearForm = (e)=>{
    e.preventDefault();
    setHeigth("");
    setWeigth("");
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="heigth">Altura:</label>
            <input
              type="number"
              name="heigth"
              id="heigth"
              placeholder="Exemplo 1,75"
              onChange={(e) => setHeigth(e.target.value)}
              value={heigth}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weigth">Peso:</label>
            <input
              type="number"
              name="weigth"
              id="weigth"
              placeholder="Exemplo 75,5"
              onChange={(e)=> setWeigth(e.target.value)}
              value={weigth}
            />
          </div>
        </div>
        <div className="actions-control">
          <Button id={"calc-btn"} text={"Calcular"} />
          <Button id={"clear-btn"} text={"Limpar"} action={clearForm}/>
        </div>
      </form>
    </div>
  );
}

export default ImcCalc;
