'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Facebook, TwitterX, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const FooterMenu = () => (
  <div className="footer">
    <div className="container">
      <div className="row justify-content-center pt-4">
        <div className="col">
          <p>NAVIGATION</p>
          <hr />
          <ul className="footer_col">
            <li>About Us</li>
            <li>Employment</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className="col">
          <p>MAIN MENU</p>
          <hr />
          <ul className="footer_col">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="col">
          <p>CONNECT</p>
          <hr />
            <ul className="footer_col">
                <li>Sign Up for the latest updates</li>
                <li><input  type = "text"/><button className = "btn btn-dark">Join</button></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FooterMenu;
