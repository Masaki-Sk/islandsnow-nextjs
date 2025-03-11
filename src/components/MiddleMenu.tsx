'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Facebook, TwitterX, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const MiddleMenu = () => (
  <div className="row mx-0 justify-content-center pt-4">
    <div className="col-1">
      <div className="nav-item dropdown">
        <div className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          MEN
        </div>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Your cart is currently empty.</a></li>
        </ul>
      </div>
    </div>
    <div className="col-1">
      <div className="nav-item dropdown">
        <div className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          WOMEN
        </div>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Your cart is currently empty.</a></li>
        </ul>
      </div>
    </div>
    <div className="col-1">
      <div className="nav-item dropdown">
        <div className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          KIDS
        </div>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Your cart is currently empty.</a></li>
        </ul>
      </div>
    </div>
    <div className="col-1">
      <div className="nav-item dropdown">
        <div className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BRANDS
        </div>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Your cart is currently empty.</a></li>
        </ul>
      </div>
    </div>
    <div className="col-1">
      SEARCH
    </div>
  </div>
);

export default MiddleMenu;
