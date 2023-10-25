import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import './styles/navbar.scss';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileOpen(prevVal => !prevVal);
  }

  const navItems = [
    {
      text: 'Home',
      link: '/portfolio/#home'
    },
    {
      text: 'About',
      link: '/portfolio/about'
    },
    {
      text: 'Work',
      link: '/portfolio/#project_links'
    },
    {
      text: 'Resume',
      link: '/portfolio/sarahanngarcia_resume.pdf',
      rel: 'noopener noreferrer',
      target: '_blank'
    }
  ]
  const drawer = (
      <div
        role="presentation"
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index}>
              {item.text === 'About' ? (
                <Link to={item.link} className="nav-drawer-button">
                  {item.text}
                </Link>
              ) : (<a
                className="nav-drawer-button"
                href={item.link}
                rel={item.rel ? item.rel : ''}
                target={item.target ? item.target : ''}
                download={item.text === 'Resume' ? true : false}
              >
                {item.text}
              </a>)}
            </ListItem>
          ))}
        </List>
      </div>
    );
  
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={'navbar'} id='nav-id'>
        <Toolbar>
          <IconButton
            edge="start"
            className="logo-icon"
            color="inherit"
            aria-label="icon">
            <a href='/portfolio/#home'>
              <img className='logo' src="/portfolio/logos/sa_logo.png" alt="logo"></img>
            </a>
          </IconButton>
          <IconButton
            edge="start"
            className="menu-icon"
            onClick={handleDrawerToggle}
            color="default"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className="nav-button-container">
            <Button className="navButton">
              <a className="nav-button" href='/portfolio/#home'>
                Home
              </a>
            </Button>
            <Button className="navButton">
              <Link className="nav-button" to='/portfolio/about'>
                About
              </Link>
            </Button>
            <Button className="navButton">
              <a className="nav-button" href='/portfolio/#project_links'>
                Work
              </a>
            </Button>
            <Button className="navButton">
              <a className="nav-button" href='/portfolio/sarahanngarcia_resume.pdf' rel="noopener noreferrer" target="_blank" download>
                Resume
              </a>
            </Button>
          </div>
          <Drawer anchor="top" open={mobileOpen} onClose={handleDrawerToggle}>
            {drawer}
          </Drawer>
          <div className="contact-container" style={{ width: '100%', textAlign: 'right' }}>
            <Typography variant="h6" className="contact-header" style={{ display: 'inline-block', fontWeight: 'bold', paddingRight: '5px' }}>
              Contact |
              {' '}
            </Typography>
            <div className="social-container">
              <a className="contact-icons" href="https://www.linkedin.com/in/sarah-ann-garcia/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
              </a>
              <a className="contact-icons" href="https://github.com/sgarcia30" target="_blank" rel="noopener noreferrer">
                <GitHubIcon/>
              </a>
              <a className="contact-icons" href="mailto:sarahanngarcia30@gmail.com" target='_blank' rel="noopener noreferrer" title="sarahanngarcia30@gmail.com">
                <EmailIcon/>
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
