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
                <a href="https://medium.com/@delucasvb" className="deco-none" target="_blank">
                    <i className="profile socicon-medium" />
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

                <div className="container-fluid text-center">
                    <h2>Music I Love</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/2nTcKrgAPT6YSgfhl4r9b1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="Living Room Party"></iframe>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/0fudP8V92wVYwFDROl87ZH" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="School of Rock"></iframe>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://open.spotify.com/embed/user/delucasvb/playlist/2JxtZtjRvYoPx6nxvWLVd6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="Sweaty"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProfilesSection;