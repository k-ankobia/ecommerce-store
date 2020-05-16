import React from "react";
import "./FormInput.styles.scss";

export const FormInput = ({ handleChange, propCustomLabel, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {propCustomLabel ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {propCustomLabel}
      </label>
    ) : null}
  </div>
);
