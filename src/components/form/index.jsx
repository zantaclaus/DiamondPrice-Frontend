import React, { useState } from "react";
import "./form.css";

const Column = ({ label, name }) => {
  return (
    <div className="form__div first__form">
      <input type="text" name={name} className="form__input" placeholder=" " />
      <label htmlFor="" className="form__label">
        {label}
      </label>
    </div>
  );
};

const Form = () => {
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const coefficient = [
      -2215.3961, 3877.2509, 1721.7128, -1136.8569, -1190.1302, -1.7343,
      47.4263, -51.5837, -16.5138, -81.4655,
    ];
    let value = coefficient[0];

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value < 0) {
        setError("Input must be Positive Number");
        setPrice("");
        return 0;
      }
      if (e.target[i].value === "") {
        setError("Input is Null");
        setPrice("");
        return 0;
      }
    }

    for (let i = 0; i < e.target.length - 1; i++) {
      console.log(e.target[i].value + " " + coefficient[i + 1]);
      value += parseFloat(e.target[i].value) * coefficient[i + 1];
    }

    setError(null);
    setPrice(value.toFixed(2));
  };

  return (
    <div className="page">
      {error && <h1 className="error">{error}</h1>}
      <div className="l-form">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form__title">Predict Diamond Price</h1>

          <div className="grid">
            <Column label="Carat" name="Carat" />
            <Column label="Length" name="Length" />
            <Column label="Width" name="Width" />
            <Column label="Height" name="Height" />
            <Column label="Tabel" name="Tabel" />
            <Column label="Depth" name="Depth" />
            <Column label="Color" name="Color" />
            <Column label="Cut" name="Cut" />
            <Column label="Clarity" name="Clarity" />
          </div>

          <input type="submit" className="form__button" value="Predicted" />
        </form>
      </div>
      {price !== "" && <div className="result">~ {price} $</div>}
    </div>
  );
};

export default Form;
