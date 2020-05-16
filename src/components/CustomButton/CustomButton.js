import React from "react";

// clidren is being used for all text within the component
export const CustomButton = ({ children, ...otherProps }) => {
  console.log(otherProps);

  //   console.log("spread props", ...otherProps);

  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};
