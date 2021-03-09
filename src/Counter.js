import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

const Counter = function ({ counter, onIncrement, onDecrement, onChangeIncrement, onDelete }) {
  const [changeValue, setChangeValue] = useState(counter.change);

  const handleChange = (e) => {
    setChangeValue(e.target.value);
    onChangeIncrement(counter.id, e.target.value);
  }

  return (
    <div className="counter">
      <p>Value: {counter.value}</p>
      <button onClick={() => onIncrement(counter.id)}>Increment</button>
      <button onClick={() => onDecrement(counter.id)}>Decrement</button>
      <form>
        <input type="number" value={changeValue} onChange={handleChange} />
      </form>
      <button onClick={() => onDelete(counter.id)}>Delete</button>
      <p>{counter.description}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (id) => {
      dispatch({ type: "INCREMENT", id: id });
    },
    onDecrement: (id) => {
      dispatch({ type: "DECREMENT", id: id });
    },
    onChangeIncrement: (id, change) => {
      dispatch({ type: "CHANGE_INCREMENTED", id: id, change: change });
    },
    onDelete: (id) => {
      dispatch({ type: "DELETE", id: id });
    },
  };
};

export default connect(null, mapDispatchToProps)(Counter);
