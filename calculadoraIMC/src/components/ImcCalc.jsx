import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

function ImcCalc() {
  const [heigth, setHeigth] = useState("");
  const [weigth, setWeigth] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeigth("");
    setWeigth("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeigthChange = (e) => {
    const updateValue = validDigits(e.target.value);

    setHeigth(updateValue);
  };

  const handleWeigthChange = (e) => {
    const updateValue = validDigits(e.target.value);

    setWeigth(updateValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="heigth">Altura:</label>
            <input
              type="text"
              name="heigth"
              id="heigth"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleHeigthChange(e)}
              value={heigth}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weigth">Peso:</label>
            <input
              type="text"
              name="weigth"
              id="weigth"
              placeholder="Exemplo 75,5"
              onChange={(e) => handleWeigthChange(e)}
              value={weigth}
            />
          </div>
        </div>
        <div className="actions-control">
          <Button id={"calc-btn"} text={"Calcular"} />
          <Button id={"clear-btn"} text={"Limpar"} action={clearForm} />
        </div>
      </form>
    </div>
  );
}

export default ImcCalc;
