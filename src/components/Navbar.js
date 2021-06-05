import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  
  const [dropdown1, setDropdown1] = useState(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const [dropdown2, setDropdown2] = useState(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const [dropdown3, setDropdown3] = useState(false);

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };  

  
  const [dropdown4, setDropdown4] = useState(false);

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };

  const [dropdown5, setDropdown5] = useState(false);

  const onMouseEnter5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(true);
    }
  };

  const onMouseLeave5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(false);
    }
  };

  const [dropdown6, setDropdown6] = useState(false);

  const onMouseEnter6 = () => {
    if (window.innerWidth < 960) {
      setDropdown6(false);
    } else {
      setDropdown6(true);
    }
  };

  const onMouseLeave6 = () => {
    if (window.innerWidth < 960) {
      setDropdown6(false);
    } else {
      setDropdown6(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>          
            <img className='college-logo' src='images/college logo.jpg' alt='college-log' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'
              onMouseEnter={onMouseEnter1}
              onMouseLeave={onMouseLeave1} 
            >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About <i className='fas fa-angle-down'/>
              </Link>
              { dropdown1 && <ul className='dropdown-menu'>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Infrastructure</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Location</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Mission</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Admin</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Governance</Link>
                                  </li>                 
                            </ul> }
            </li>

            <li className='nav-item'
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2} 
            >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Academics <i className='fas fa-angle-down'/>
              </Link>
              { dropdown2 && <ul className='dropdown-menu'>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Courses</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>B.tech</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>M.tech</Link>
                                  </li>
                                  <li> 
                                  <Link to='/' className='dropdown-link'>PHD</Link>
                                  </li>                                 
                                <li> 
                                  <Link to='/' className='dropdown-link'>Faculty</Link>
                                  </li>               
                            </ul>  }
            </li>

            <li className='nav-item'
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3} 
            >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Admissions <i className='fas fa-angle-down'/>
              </Link>
              { dropdown3 && <ul className='dropdown-menu'>
                                <li> 
                                  <Link to='/' className='dropdown-link'>B.tech</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>M.tech</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>PHD</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Fees</Link>
                                  </li>                      
                            </ul> }
            </li>

            <li className='nav-item'
              onMouseEnter={onMouseEnter4}
              onMouseLeave={onMouseLeave4} 
            >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Campus Life<i className='fas fa-angle-down'/>
              </Link>
              { dropdown4 && <ul className='dropdown-menu'>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Facilities</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Labs</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Sports</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Hostel</Link>
                                  </li> 
                                <li>
                                  <Link to='/' className='dropdown-link'>Healthcare</Link>
                                  </li>                      
                            </ul> }
            </li>

            <li className='nav-item'
              onMouseEnter={onMouseEnter5}
              onMouseLeave={onMouseLeave5} 
            >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Careers <i className='fas fa-angle-down'/>
              </Link>
              { dropdown5 && <ul className='dropdown-menu'>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Campus placements</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Internships</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Trainings</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Faculty /Staff recruitment </Link>
                                  </li>                       
                            </ul> }
            </li>

            <li className='nav-item'
              onMouseEnter={onMouseEnter6}
              onMouseLeave={onMouseLeave6} 
            >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Research <i className='fas fa-angle-down'/>
              </Link>
              { dropdown6 && <ul className='dropdown-menu'>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Areas</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Projects</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Publications</Link>
                                  </li>
                                <li> 
                                  <Link to='/' className='dropdown-link'>Resourses</Link>
                                  </li>                       
                            </ul> }
            </li>

            



          </ul>
          {/*button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
