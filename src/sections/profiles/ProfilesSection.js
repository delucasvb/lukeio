import React, {Component} from "react";
import './profiles.css'

class ProfilesSection extends Component {
    render() {
        return (
            <section id="profiles">
                <h1>Profiles.</h1>
                <i className="socicon-facebook"></i>
                <i className="socicon-twitter"></i>
                <i className="socicon-strava"></i>
                <i className="socicon-github"></i>
                <i className="socicon-linkedin"></i>
                <i className="socicon-imdb"></i>
                {/*https://www.imdb.com/user/ur25370628/ratings -->*/}
                <i className="socicon-spotify"></i>
                <i className="socicon-stackoverflow"></i>
                <i className="socicon-medium"></i>
                <i className="socicon-youtube"></i>

                <h2>Music I Love</h2>
                <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/2nTcKrgAPT6YSgfhl4r9b1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/0fudP8V92wVYwFDROl87ZH" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/2JxtZtjRvYoPx6nxvWLVd6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </section>
        );
    }
}

export default ProfilesSection;