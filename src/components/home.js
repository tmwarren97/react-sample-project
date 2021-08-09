import React from "react";

const Home = () => {
  return (
    <div className='home'>
      <div className='home-field'>
        <label>User Name:</label>
        <input
          type='text'
          name='username'
        />
      </div>
      
      <div className='home-field'>
        <label>Age:</label>
        <input
          type='text'
          name='age'
        />
      </div>
      
      <div className='home-field'>
        <label>Location:</label>
        <select value='Location'>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Seattle">Seattle</option>
        </select>
      </div>

      <div className='home-field'>
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

export default Home;