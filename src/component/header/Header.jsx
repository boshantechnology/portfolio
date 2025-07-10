import React from 'react'
import Navbar from '../navbar/Navbar'
import call from "../../assets/call-blue.png"
import aws from "../../assets/aws.png"
import google from "../../assets/google.png"
import clutch from "../../assets/clutch-2.png"
import stars from "../../assets/star.png"
import half_star from "../../assets/half-star.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='headers'>
      <Navbar/> 
     
      <div className='header-content'>
        <p className='p3'>Your Innovation Partner,</p>
        <h1>Delivering Unique</h1>
        <h1>Solution And Tangible</h1>
        <h1>Results.</h1>
        <p className='ps'>Leader In Website Creation And App Development. We Strategize For Outcomes,</p>
        <p className='pk'>Engineer For Precision.</p>
        <div className='headers-data'>
          <a href="#">Schedule A Call</a>
          {/* <img src={call} alt="img" height="40px"/> */}
           <i class="fa-solid fa-phone fa-lg "></i>
        </div>
        <div className='header-social'>
          <div className='header-google'>
            <img src={google} alt="err" height="30px" />
            <div className='header-g'>
              <p>Google Cloud</p>
            <h4>Partner</h4>
            </div>
          </div>
          <div className='header-aws'>
            <img src={aws} alt="err" height="50px" />
            <div className='header-a'>
              <p>partner</p>
              <p>network</p>
            </div>
          </div>
          <div className='header-clutch'>
            <p>Rate on</p>
            <div className='header-c'>
              <img src={clutch} alt="err" height="30px" />
              <h4>4.8</h4>
            </div>
            <div className='starss'>
              <img src={stars} alt ="stars"  height="15px"/>
              <img src={stars} alt ="stars" height="15px"/>
              <img src={stars} alt ="stars" height="15px"/>
              <img src={stars} alt ="stars" height="15px"/>
              <img src={half_star} alt ="stars" height="15px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
