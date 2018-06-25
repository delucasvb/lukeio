import React, {Component} from "react";
import './aboutme.css'
import faAddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard'
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs'
import faBinoculars from '@fortawesome/fontawesome-free-solid/faBinoculars'
import faChess from '@fortawesome/fontawesome-free-solid/faChess'
import ThoughtBubble from "../../components/ThoughtBubble/ThoughtBubble";

class AboutMeSection extends Component {
    render() {
        return (
            <section id="about-me" className="section-aboutme">
                <h1>About Me.</h1>
                <div className="offset-md-1 col-md-5 text-white">
                    <ThoughtBubble icon={ faAddressCard } title="Some Personalia">
                        <p>
                            Working on a product is my passion. I can push a dynamic team to its full potential, to
                            deliver results beyond the expectation of the customer. Living technology day and night
                            allows me to always bring something new and exciting to the drawing boards.
                        </p>
                        <p>
                            <em>
                                I'm 27 years young and living in Ghent, one of the historical, cultural and academic hotspots
                                in Belgium.
                            </em>
                        </p>
                    </ThoughtBubble>
                    <ThoughtBubble icon={ faCogs } title="A Bit About My Workflow">
                        <p>
                            Keeping things organised is a top priority for me. I use clear naming, versioning and
                            thoughtful structures, and not just in code. The idea is to create a culture of quality that
                            hopefully will propagate into the product itself.
                        </p>
                        <p>
                            <em>
                                Structure was very important when I was a disk jockey in college. Keeping my playlists
                                neatly organised was key enabled me to keep up the pace in my performance.
                            </em>
                        </p>
                        <p>
                            Too many rules and you might loose your creativity though. Scrum, if applied well, can help
                            overcome that risk. Aside from fixing the classic waterfall issue, of course.
                        </p>
                        <p>
                            <em>
                                As team lead in my bachelor's thesis, I coached my team to keep every one motivated,
                                productive and most of all, happy.
                            </em>
                        </p>
                        <p>
                            Measure twice, cut once. I think before I do. Make diagrams, sketches, prototypes,...
                            Whatever works to validate an idea before actually spending hours on a dead end.
                        </p>
                        <p>
                            <em>
                                I live by the scientific method. Today I try to study physics and astrophysics, while my
                                studies focused on math above all else. This solid basis helps me analyze problems and
                                build a proven solution.
                            </em>
                        </p>
                    </ThoughtBubble>
                    <ThoughtBubble icon={ faChess } title="What I Can Do">
                        <p>
                            Specialization is not my speciality. As soon as I have a thorough understanding of how
                            something works, I try to get a grasp of the bigger picture. Are there competing frameworks
                            or other philosophies for example. What alternatives are there?
                        </p>
                        <p>
                            <em>
                                I'm schooled in Java and experienced in Spring. But for my personal projects, I always
                                try to use something different. This helps me keep a wide overview during the design or
                                research phase. Right before implementation starts, is the perfect time to dive deeper.
                            </em>
                        </p>
                    </ThoughtBubble>
                    <ThoughtBubble icon={ faBinoculars } title="What I'm Looking For">
                        <p>
                            I want to be part of a dynamic team, in a company with ambition and a clear vision. Being on
                            the same line strategically is very important to me. I need to be able to believe in the
                            product. I'm eager to learn from experienced people and men and women with a different
                            background, culture or vision.
                        </p>
                    </ThoughtBubble>
                </div>
            </section>
        );
    }
}

export default AboutMeSection;