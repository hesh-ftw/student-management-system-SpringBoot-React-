import React from 'react'
import image from './image.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='home-title'>
          <h2>Welcome to <br/> 
          Student Management System</h2>
      </div>
      <div className='landing-image'>
        <img  src={image}
        alt='landing page image'></img>
      </div>

    </div>

  )
}



export default Home
