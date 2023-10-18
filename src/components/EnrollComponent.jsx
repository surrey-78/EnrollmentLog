import React, { useState } from 'react';

const EnrollComponent = () => {
  const [name , setName] = useState('');
  const [regno, setRegno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sub1,setSub1] = useState('');
  const [sub2,setSub2] = useState('');
  const [sub3,setSub3] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRegnoChange = (e) => {
    setRegno(e.target.value);
  };

  const handleSub1Change = (e) => {
    setSub1(e.target.value);
  };

  const handleSub2Change = (e) => {
    setSub2(e.target.value);
  };

  const handleSub3Change = (e) => {
    setSub3(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Signup submitted:', { email, password });
  };

  return (
    <div className='container'> 
    <div>
      <h2>Enroll</h2>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" value={name} onChange={handleNameChange} required />
        <br />
        <label>Register Number :</label>
        <input type="text" value={regno} onChange={handleRegnoChange} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <label>Re-type Password:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        <br />
        <label>Subject 1:</label>
        <select name='sub1' id='sub1' value={sub1} onChange={handleSub1Change}>
          <option value=" "></option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
        </select>
        <label>Subject 2:</label>
        <select name='sub2' id='sub2' value={sub2} onChange={handleSub2Change}>
          <option value=" "></option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
        </select>
        <label>Subject 3:</label>
        <select name='sub3' id='sub3' value={sub3} onChange={handleSub3Change}>
          <option value=" "></option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
        </select><br/>
        <button type="submit" className='box'>Enroll</button>
      </form>
    </div>
    </div>
  );
};

export default EnrollComponent;
