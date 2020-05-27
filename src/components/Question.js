import React, { Fragment, useState } from 'react';

const Question = () => {

    const [quantity, setQuantity] = useState(0);

    const defineBudget = e => {
        setQuantity( parseInt(e.target.value, 10) );
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form
                onSubmit={handleSubmit}
            >
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
}
 
export default Question;