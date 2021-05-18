import React, { useState, useEffect } from "react";

const Landing = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand ml-2" href="#">
                    <img src="assets/images/linkrypt.svg" width="30" height="30" alt="" />linkrypt
        </a>
                <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul class="navbar-nav nav-pills nav-fill">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">enter</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section class="p-0 bg-primary">
                <div class="swiper-container text-white">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide vh-25">
                            <div class="caption">
                                <div class="container">
                                    <div>
                                        <div class="col-md-12 align-self-center text-center" data-swiper-parallax-y="-250%">
                                            <h1 class="display-2">Monetize your <br></br><b class="font-weight-bold" id="typed"></b>.</h1>
                                            <div id="typed-strings">
                                                <p>work</p>
                                                <p>documents</p>
                                                <p>videos</p>
                                                <p>music</p>
                                                <p>pictures</p>
                                                <p>live streaming</p>
                                                <p>digital art</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-10 col-lg-8">
                            <h2>How it works</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="owl-carousel visible" data-items="[3,2,2]" data-margin="20">
                                <div class="step step-highlight">
                                    <h4 class="step-title">Create content</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                                </div>
                                <div class="step">
                                    <h4 class="step-title">Share link</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua</p>
                                </div>
                                <div class="step">
                                    <h4 class="step-title">Get paid</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="text-center">
                            <h2>Start sharing your content and make money</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="text-center">
                            <h5>Whether it is a document, picture, music, video, live streaming, digital art, etc., you can
                        monetize it with ease.</h5>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-8 text-center">
                            <a href="" class="btn btn-primary btn-rounded">enter</a>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-dark text-white">
                <div class="container py-5">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col text-left">
                                <span class="copyright-text">&copy; linkrypt</span>
                            </div>
                            <div class="col-md-5 text-center text-md-right">
                                <ul class="socials">
                                    <li><a href="http://instagram.com/linkrypt" target="_blank" class="icon-instagram text-instagram-blue fs-20"></a></li>
                                    <li><a href="http://twitter.com/linkrypt" target="_blank" class="icon-twitter text-twitter-blue fs-20"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>)
}

export default Landing;