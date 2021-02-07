/* eslint-disable */

import React from 'react'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram
} from '@material-ui/icons'
import { Link, NavLink, withRouter } from 'react-router-dom'
import resumeData from '../../utils/resumeData'
import CustomButton from '../Button/Button'
import './Header.css'

const Header = (props) => {
  const pathName = props?.location?.pathname

  return (
    <Navbar expand='lg' sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle></Navbar.Toggle>

      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
          Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}
          >
          Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/blog'
            className={pathName === '/blog' ? 'header_link_active' : 'header_link'}
          >
          Blog
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/aboutme'
            className={pathName === '/aboutme' ? 'header_link_active' : 'header_link'}
          >
          About Me
          </Nav.Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon}</a>
          ))}
          <CustomButton text='Hire Me' icon={<Telegram />}></CustomButton>
        </div>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default withRouter(Header)
