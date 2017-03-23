import React from 'react';

export const Text = (props) => {
  return (
    <div className={"row " + props.txtPosition}>
      {props.children}
    </div>
  )
}
