import React from "react";

export const Alert = (props) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <div>
          {capitalize(props.alert.type)} : {props.alert.message}
        </div>
      </div>
    )
  );
};
