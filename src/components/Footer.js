import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/'>Infrastructure</Link>
            <Link to='/'>Location</Link>
            <Link to='/'>Mission</Link>
            <Link to='/'>Admin</Link>
            <Link to='/'>Governance</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Academics</h2>
            <Link to='/'>Courses</Link>
            <Link to='/'>B.tech</Link>
            <Link to='/'>M.tech</Link>
            <Link to='/'>PHD</Link>
            <Link to='/'>Faculty</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Admissions</h2>
            <Link to='/'>B.tech</Link>
            <Link to='/'>M.tech</Link>
            <Link to='/'>PHD</Link>
            <Link to='/'>Fees</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Campus Life</h2>
            <Link to='/'>Facilities</Link>
            <Link to='/'>Labs</Link>
            <Link to='/'>Sports</Link>
            <Link to='/'>Hostel</Link>
            <Link to='/'>Healthcare</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Careers</h2>
            <Link to='/sign-up'>Campus placements</Link>
            <Link to='/'>Internships</Link>
            <Link to='/'>Trainings</Link>
            <Link to='/'>Faculty recruitment</Link>
            <Link to='/'>Staff recruitment</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Research</h2>
            <Link to='/'>Areas</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Publications</Link>
            <Link to='/'>Resourses</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <img src='images/college logo.jpg' className='social-logo' alt='college-log' />
          </div>

          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      <small className='website-rights'>Satyabham Engineering college © 2021</small>
    </div>
  );
}

export default Footer;
