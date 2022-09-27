import React from 'react';
import 'bulma/css/bulma.min.css';

import { Form, Navbar } from 'react-bulma-components';
import { useEffect } from 'react';
import logo from '../assets/game-trucks-logo.png';
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

const { Brand, Burger, Menu, Item, Dropdown, Link, Divider, Container } = Navbar;
const { Input, Field, Control, Label } = Form;
import './MyNavBar.css'
const logoSize = '60px';
export function MyNavBar() {
    return <>
        <nav className="navbar" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="Game Trucks Logo" style={{ objectFit: 'fit', minHeight: logoSize, minWidth: logoSize, top: 0, left: 0 }} />
                </a>
                <div className="navbar-item">
                    <p >
                        <strong>Game Trucks GT</strong><br />
                        Play Games Everywhere<br />
                        Call Us Today! <a href="tel:+14165240064"><strong>416-524-0064</strong></a>
                    </p>
                </div>
                <a role="button" onClick={($event) => {
                    $event.stopPropagation();
                    console.log($event)
                    const $target = document.getElementById('navbarBasicExample');
                    $event.target.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                }} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className='navbar-end'>
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Parties
                        </a>

                        <a className="navbar-item">
                            Booking
                        </a>

                        <a className="navbar-item">
                            Testimonials
                        </a>
                        <a className="navbar-item">
                            About Us
                        </a>
                        <div className="navbar-item">
                            <a href="">
                                <AiFillFacebook color='#4267B2' size={'2rem'} />
                            </a>
                            <a href="">

                                <AiFillYoutube color='red' size={'2rem'} />
                            </a><a href="">

                                <AiOutlineTwitter color='#1DA1F2' size={'2rem'} />
                            </a>
                            <a href="">

                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x2='100%' y2='100%' transform='159'>
                                        <stop stopColor="#405DE6" offset="0%" />
                                        <stop stopColor="#5B51D8" offset="10%" />
                                        <stop stopColor="#833AB4" offset="20%" />
                                        <stop stopColor="#C13584" offset="100%" />
                                    </linearGradient>
                                </svg>
                            </a>
                            <a href="">

                                <AiOutlineInstagram style={{ fill: "url(#blue-gradient)" }} size={'2rem'} />
                            </a>
                            <a href="">

                                <AiFillLinkedin color='#0077b5' size={'2rem'} />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </nav>
    </>
}