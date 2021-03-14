import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaBicycle } from 'react-icons/fa';

function Navbar(props){

    console.log(props);

    const handleClick=()=>{
        props.history.push("/")
    }

    return(
        <div className="nav-container">
            <div className="logo-box" onClick={handleClick}>
                <div className='icon'><FaBicycle /></div>
                <span>MY BIKES</span>
            </div>
            <div className="info-box">
                <a href='https://github.com/Nikoobox/mybikes' rel='noopener noreferrer' target="_blank">
                    Github
                </a>
            </div>
        </div>
    )
}

export default withRouter(Navbar);