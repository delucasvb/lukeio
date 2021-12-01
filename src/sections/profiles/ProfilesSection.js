import React, {Component} from "react";
import './profiles.css'

class ProfilesSection extends Component {
    render() {
        return (
            <section id="profiles" className="text-center">
                <h1>Profiles.</h1>
                <a href="https://stackoverflow.com/users/4212150/delucasvb" className="deco-none" target="_blank">
                    <i className="profile socicon-stackoverflow" />
                </a>
                <a href="https://github.com/delucasvb" className="deco-none" target="_blank">
                    <i className="profile socicon-github" />
                </a>
                <a href="https://www.linkedin.com/in/lucas-vander-beken-67429348/" className="deco-none" target="_blank">
                    <i className="profile socicon-linkedin" />
                </a>
                <a href="https://www.strava.com/athletes/20132720" className="deco-none" target="_blank">
                    <i className="profile socicon-strava" />
                </a>
                <a href="https://www.imdb.com/user/ur25370628/ratings" className="deco-none" target="_blank">
                    <i className="profile socicon-imdb" />
                </a>
                <a href="https://open.spotify.com/user/delucasvb" className="deco-none" target="_blank">
                    <i className="profile socicon-spotify" />
                </a>
            </section>
        );
    }
}

export default ProfilesSection;