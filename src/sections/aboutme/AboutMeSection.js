import React, {Component} from "react";
import './aboutme.css'
import faAddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard'
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
import faBinoculars from '@fortawesome/fontawesome-free-solid/faBinoculars'
import ThoughtBubble from "../../components/ThoughtBubble/ThoughtBubble";
import headCircle from "../../img/CV photo circle.png";

class AboutMeSection extends Component {
    render() {
        return (
            <section id="about-me" className="section-aboutme">
                <img id="head-circle" src={headCircle} alt="Headshot" />
                <h1>About Me.</h1>
                <div className="offset-md-1 col-md-5 text-white">
                    <ThoughtBubble icon={ faAddressCard } title="Some Personalia">
                        <p>
                            Working on an idea is my passion. From brainstorm to research and discovery to
                            implementation and delivery. After that, I'm already curious about the next problem.
                        </p>
                        <p>
                            <em>
                                I'm 30 years young and living in Ghent, one of the historical, cultural and academic
                                hotspots in Belgium.
                            </em>
                        </p>
                    </ThoughtBubble>
                    <ThoughtBubble icon={ faWrench } title="A Bit About My Work">
                        <p>
                            Measure twice, cut once. I think before I do. Make diagrams, sketches, prototypes,...
                            Whatever works to validate an idea before actually spending hours on a dead end. I am
                            addicted to quality: in the things that I use in my daily life and in what I create.
                        </p>
                        <p>
                            <em>
                                My studies focused on math. This solid basis helps me analyze problems and build a
                                proven solution. While on the bike, I think about problems that I haven't been able
                                to solve otherwise.
                            </em>
                        </p>
                    </ThoughtBubble>
                    <ThoughtBubble icon={ faBinoculars } title="What I'm Looking For">
                        <p>
                            I want to be part of a dynamic team, in a company with ambition and a clear vision. Being on
                            the same line strategically and philosophically is very important to me, so that I can
                            believe in the idea and the mission. I'm eager to learn from experienced people and men and
                            women with a different background, culture or vision.
                        </p>
                    </ThoughtBubble>
                </div>
            </section>
        );
    }
}

export default AboutMeSection;
