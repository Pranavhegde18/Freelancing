import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar1() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 980) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const LogOut = ({setLoginUser}) => {
    return(
            <div className="button" onClick={() => setLoginUser({})} >LogOut</div>
    )
}

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <b><i>FR33LANCER</i></b>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home1' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services1'
                className='nav-links'
                onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/feedback'
                className='nav-links'
                onClick={closeMobileMenu}>
                Feedback
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/freelance'
                className='nav-links'
                onClick={closeMobileMenu}>
                Freelance
              </Link>
            </li>

            <li>
              <Link
                to='/register'
                className='nav-links-mobile'
                onClick={() => LogOut({})}>
                LogOut
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LogOut</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
