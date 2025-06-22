import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.PNG"

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='nav-br'>
                <li className='nav-lg'>
                    <img src={logo} />
                   <div>
                     <p className='para1'>eoxysit.</p>
                    <p className='para2'>Soltution LLP</p>
                   </div>
                </li>
                <input type="checkbox" id="check1"/>
                <span>
                    <li><a href ="#">Company</a></li>
                    <li><a href ="#">Portfolio</a></li>
                    <li><a href ="#">Services</a></li>
                    <li><a href ="#">Hire</a></li>
                    <li><a href ="#">Blog</a></li>
                    <li className='nav-contact'><a>
                        <div className='icons'>
                            <p>ContactUs</p>
                             <i class="fa-solid fa-phone "></i>
                        </div></a></li>
                    <label for="check1" className='menu-close'><i class="fa-solid fa-xmark"></i></label>
                </span>
                <label for="check1" className='menu-open'><i class="fa-solid fa-bars-staggered"></i></label>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
