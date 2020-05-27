import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({ setBudget, setRemaining }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const defineBudget = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error message="El Presupuesto es Incorrecto" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={defineBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};
 
export default Question;