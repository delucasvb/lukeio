import React, {Component} from "react";
import './GetStartedButton.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'

class GetStartedButton extends Component {
    render() {
        return (
            <div className="btn btn-primary btn-xl rounded-pill mt-5">
                <FontAwesomeIcon icon={faAngleDown} className="moveY" />
                <span className="button-title">Get Started</span>
                <FontAwesomeIcon icon={faAngleDown} className="moveY" />
            </div>
        );
    }
}

export default GetStartedButton;