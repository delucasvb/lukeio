import React, {Component} from "react";
import GetStartedButton from "../../components/GetStartedButton/GetStartedButton";
import Scrollchor from 'react-scrollchor'
import './header.css'

class Header extends Component {
    render() {
        return (
            <header id="top" className="masthead text-center">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Getting to Know</h1>
                        <h2 className="masthead-subheading mb-0">Lucas Vander Beken.</h2>
                        <Scrollchor to="#about-me" disableHistory="true" animate={ this.props.animate }>
                            <GetStartedButton />
                        </Scrollchor>
                    </div>
                </div>

                <div className="bg-circle-1 bg-circle"></div>
                <div className="bg-circle-2 bg-circle"></div>
                <div className="bg-circle-3 bg-circle"></div>
                <div className="bg-circle-4 bg-circle"></div>
            </header>
        );
    }
}

export default Header;