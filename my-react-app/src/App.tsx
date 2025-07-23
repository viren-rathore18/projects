
import React, { useState } from 'react';
import './App.css'

function App() {
  return (
    <div className='container'>
      <h1>Hello, Viren Rathore!</h1>
      <h2>I am a full-stack web developer</h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <p>Your React + TypeScript + Vite project is ready.</p>
      <strong>World's Best software developer & engineer</strong>
      <hr />

      <h3>Contact Form</h3>
      <ContactForm/> 
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
   

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}


export default App;
