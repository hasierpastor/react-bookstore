import React from 'react';

function Button(props) {
  console.log(props);
  if (props.method === 'add') return <button onClick={props.action}>+</button>;
  return <button onClick={props.action}>-</button>;
}
export default Button;
