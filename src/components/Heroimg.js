import '../styles/Heroimgstyle.css';
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg';
import {Link} from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='into-img'
        src={IntroImg} />
        </div>
        <div className='content'>
            <p>Hi,I'M FRONT-END</p>
            <h1>REACT JS DEVELOPER</h1>
            <div>
                <Link to="/Projects"
                className='btn'>
                    Projects
                </Link>
                <Link to="/Contact"
                className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg