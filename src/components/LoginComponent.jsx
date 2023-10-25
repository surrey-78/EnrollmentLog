import axios from 'axios';
import React, { useState } from 'react';

const LoginComponent = () => {
  const [regno, setRegno] = useState('');
  const [password, setPassword] = useState('');

  const handleRegnoChange = (e) => {
    setRegno(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3500/api/v1/login`, {regno : regno,
  password : password})
  .then(response => console.log(response.data))
  .catch(error => console.log(error.response.data))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Register No. :</label>
        <input type="text" value={regno} onChange={handleRegnoChange} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
