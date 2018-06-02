import React, {Component} from "react";
import '../node_modules/socicon/css/socicon.css'
import './App.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import Scrollchor from 'react-scrollchor'
import Header from "./sections/header/Header";
import AboutMeSection from "./sections/aboutme/AboutMeSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ProfilesSection from "./sections/profiles/ProfilesSection";
import * as AOS from "aos";
import $ from 'jquery';

function easeOutQuint(x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
}

const animate = {offset: -51, duration: 300, easing: easeOutQuint};

class App extends Component {
    componentDidMount() {
        // Load scrolling animations
        AOS.init();

        // Close bootstrap's mobile menu after clicking on a menu item
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    }

    render() {
        return (
            <div>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
                    <Scrollchor to="#top" disableHistory="true" animate={animate} className="navbar-brand">
                        Lucas Vander Beken.
                    </Scrollchor>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={ faBars } className="text-white"></FontAwesomeIcon>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Scrollchor to="#about-me" disableHistory="true" animate={animate} className="nav-link">
                                    About Me.
                                </Scrollchor>
                            </li>
                            <li className="nav-item">
                                <Scrollchor to="#portfolio" disableHistory="true" animate={animate} className="nav-link">
                                    Portfolio.
                                </Scrollchor>
                            </li>
                            <li className="nav-item">
                                <Scrollchor to="#profiles" disableHistory="true" animate={animate} className="nav-link">
                                    Profiles.
                                </Scrollchor>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Header animate={ animate } />

                <AboutMeSection />

                <PortfolioSection />

                <ProfilesSection />

                <footer className="text-center">
                    Splash page based on <a href="https://startbootstrap.com/template-overviews/one-page-wonder/">One Page Wonder</a>.
                </footer>
            </div>
        );
    }
}

export default App;
