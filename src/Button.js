import React from 'react';

const Button = method => {
  if (method === 'add') return <button>+</button>;
  return <button>-</button>;
};
export default Button;
