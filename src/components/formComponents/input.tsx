import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <label htmlFor="input">{props.name}</label>
      <br />
      <input
        style={{ border: "1px solid black" }}
        type={props.type}
        name={props.name}
        required
      />
    </div>
  );
};

export default TextInput;
