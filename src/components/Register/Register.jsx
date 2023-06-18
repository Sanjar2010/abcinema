import React, { useState } from 'react';

const Register = () => {
  const [code, setCode] = useState('');
  

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleInput = (event) => {
    setCode(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (code === 'admin' ) {
      window.location.href = '/admin';
    }
  };




  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={code} onChange={handleInputChange} />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Register;
