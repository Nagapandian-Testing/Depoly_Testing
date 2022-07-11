import React from "react";
import "../Navbar/Navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <nav class="navbar fixed-top navbar-expand-md  navbar-light  ">
        <a class="navbar-brand" href="/">
          <img src="/assets/images/logo.png"></img>
        </a>
        <button
          class="navbar-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/service">
                Service
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="/career">
                Career
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
