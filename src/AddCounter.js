import React from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import "./App.css";

const AddCounter = ({ onAddNewCounter }) => {
  const formik = useFormik({
    initialValues: {
      id: "",
      value: 0,
      change: 1,
    },
    onSubmit: (values) => {
      values.id = uuidv4();
      onAddNewCounter({ ...values});
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <button type="submit">Dodaj Licznik</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewCounter: (counter) => {
      dispatch({ type: "ADD_COUNTER", counter: counter });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddCounter);
