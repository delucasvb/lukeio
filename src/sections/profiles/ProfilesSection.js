import React, {Component} from "react";
import './profiles.css'

class ProfilesSection extends Component {
    render() {
        return (
            <section id="profiles">
                <h1>Profiles.</h1>
                <i className="profile socicon-github" />
                <i className="profile socicon-stackoverflow" />
                <i className="profile socicon-strava" />
                <i className="profile socicon-linkedin" />
                {/*https://www.imdb.com/user/ur25370628/ratings -->*/}
                <i className="profile socicon-imdb" />
                <i className="profile socicon-spotify" />
                <i className="profile socicon-medium" />

                <div className="container-fluid text-center">
                    <h2>Music I Love</h2>
                    <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/2nTcKrgAPT6YSgfhl4r9b1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/0fudP8V92wVYwFDROl87ZH" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/2JxtZtjRvYoPx6nxvWLVd6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </section>
        );
    }
}

export default ProfilesSection;