import React from 'react'
import image from './image.png';
import NavBar from './component/common/NavBar';

const Home = () => {
  return (
  <div>
    <NavBar/>
    <div>
      <div className='home-title'>
          <h2>Welcome to the<br/> 
          Student Management System</h2>
      </div>
      <div className='landing-image'>
        <img  src={image}
        alt='landing page image'></img>
      </div>

    </div>
  </div>
  )
}
export default Home
