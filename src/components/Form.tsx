import React, { useState } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] =
    useState<FormState["inputValues"]>(INITIAL_STATE);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handlerClear = () => {
    setInputValues(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <textarea
          value={inputValues.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button onClick={handlerClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new sub</button>
      </form>
    </div>
  );
};
export default Form;
