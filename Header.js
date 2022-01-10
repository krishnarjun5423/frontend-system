import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header">
            

             <div className="header__top">

             <h3><pre>Blog   |</pre></h3>
             <h3><pre>Contact us   |</pre></h3>
             <h3>Login to Quadrangle</h3>

             </div>

             <div className="header__bottom">
                     
                   <div className="header__bottomleft">
                        
                        <img src="https://kalvi.degree/assets/Kalvi%20Logo.png"/>

                        <h3>Program</h3>

                        <h3>About</h3>

                        <h3>For recruiters</h3>

                   </div>

                   <div className="header__bottomright">

                   <h3>Your Application</h3>

                   <button><span>Apply</span></button>
                   </div>


             </div>

        </div>
    )
}

export default Header
