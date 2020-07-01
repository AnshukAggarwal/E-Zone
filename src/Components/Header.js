import React from 'react';
import logo from './e-zone.png';
import "./Header.css"
import Angle from './angle-down-solid.svg';
    function Header(){

        return(
            <header>  
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary static-top">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <img src={logo} id="logo" alt=""/>
                        </a>
                        <div class="Header-navbar-search  col-sm-5 col-xs-10">
                                        <div class="row">
                                            <input class="Header-navbar-input col-xs-10" type="" placeholder="Search for products" name=""/>
                                            <button type="button" class=" btn btn-warning">Search</button>
                                        </div>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Header_Responsive" aria-controls="Header_Responsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="Header_Responsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#"><i class="fa fa-shopping-cart fa-2x"></i>
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"  href="#">LOGIN</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">SIGNUP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow ">
                    <div class="container h-100 d-flex justify-content-center">
                                <ul class="navbar-nav ">
                                    <li class="nav-item active">
                                    <a class="nav-link" href="#">Men</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Women</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Baby & Kids</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Offer Zone</a>
                                    </li>
                                </ul>
                    </div>
                </nav>

            </header>
        )
        
    }
export default Header;