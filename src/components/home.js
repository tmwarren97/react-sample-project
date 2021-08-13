import React, { useState } from "react";
import { defaultHomePayload, defaultError } from './config/home-config';
import axios from 'axios';

const Home = () => {
  const [payload, setPayload] = useState(defaultHomePayload);
  const [message, setMessage] = useState(defaultError);
  const { userName, age, location } = payload;

  const submitHandler = () => {
    setMessage(defaultError);

    axios
      .post('/userInfo', payload)
      .then(res => {
        setMessage({});
      })
      .catch(err => {
        setMessage({});
      });
  };

  return (
    <div className='home'>
      <div className='home-field'>
        <label>User Name:</label>
        <input
          type='text'
          name='userName'
          value={userName}
          onChange={setPayload({})}
        />
        <span>{userName}</span>
      </div>
      
      <div className='home-field'>
        <label>Age:</label>
        <input
          type='text'
          name='age'
          value={age}
          onChange={setPayload({})}
        />
        <span>{age}</span>
      </div>
      
      <div className='home-field'>
        <label>Location:</label>
        <select name='location' value={location} onChange={setPayload({})}>
          <option value="">---</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Seattle">Seattle</option>
        </select>
        <span>{location}</span>
      </div>

      <div className='home-field'>
        <button type="button" onClick={submitHandler}>Submit</button>
        <span className={`message-holder error`}>{message.message}</span>
      </div>
    </div>
  );
};

export default Home;