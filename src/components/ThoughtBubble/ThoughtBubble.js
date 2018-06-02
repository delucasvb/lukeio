import React, {Component} from "react";
import './ThoughtBubble.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const aosFade = 'fade-right';
const aosOffset = '250';

class ThoughtBubble extends Component {
    render() {
        return (
            <div data-aos={ aosFade } data-aos-offset={ aosOffset } className="thought-bubble">
                <div className="thought-bubble-header">
                    <FontAwesomeIcon icon={ this.props.icon } />
                    <h4>{ this.props.title }</h4>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default ThoughtBubble;