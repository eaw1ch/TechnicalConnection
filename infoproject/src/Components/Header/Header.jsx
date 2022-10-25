import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import Contacts from '../../Pages/Contacts/Contacts';
import Service from '../../Pages/Service/Service';
import logo from '../../assets/images/roslogo.svg';

import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <Navbar>
        <Container className={styles.container}>
          {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' /> */}
          <Navbar.Collapse>
            <Nav className={styles.topbar}>
              <Navbar.Brand className={styles.menu} href='/'>
                <img src={logo} height='60' width='60' alt='logo' />
              </Navbar.Brand>
              <Nav.Link className={styles.menu} href='/'>
                {' '}
                Главная{' '}
              </Nav.Link>
              <Nav.Link className={styles.menu} href='/service'>
                {' '}
                Подать заявку{' '}
              </Nav.Link>
              <Nav.Link className={styles.menu} href='/contacts'>
                {' '}
                Контакты{' '}
              </Nav.Link>
              <Nav.Item className={styles.item}>
                <div className={styles.number}>8-800-220-0-220</div>
                <br />
                <div className={styles.info}>Единый номер горячей линии</div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default Header;
