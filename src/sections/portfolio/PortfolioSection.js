import React, {Component} from "react";
import './portfolio.css'

class PortfolioSection extends Component {
    professionalProjects = [
        { title: "Cloud Services", content: (
                <div>
                    <p>
                        TELETASK, a Belgian manufacturer of home automation systems, needed a way to connect all of
                        their apps to their central units. Each home has such a central unit as the heart of the system,
                        but the apps were only capable of communicating with it on the local network. They needed a way
                        to make their apps work remotely as well.
                    </p>
                    <p>
                        I designed and implemented a robust and scalable system containing a publish-subscribe message
                        broker and a REST server, all backed by the same authentication server. The apps were extended
                        to work with the new protocols and we were up and running.
                    </p>
                    <p>
                        A few months later, that same REST server was used as a backend to an AngularJS website. This
                        provided all TELETASK owners and system integrators with a few useful tools to manage their
                        installation.
                    </p>
                    <p>
                        Version one of this system was run on virtual machines, to cut costs. But as soon as demand was
                        starting to rise, we ported everything to AWS, using their SaaS models to lower the bar of
                        maintenance as well.
                    </p>
                </div>) },
        { title: "Algorithms for Lighting", content: (
                <div>
                    <p>
                        Human Centric Lighting was the next big project for TELETASK. This consisted of two parts: a
                        daylight harvesting algorithm and a daylight temperature simulation algorithm.
                    </p>
                    <p>
                        Resources are expensive in home automation, so designing these algorithms to maximise
                        performance while keeping both CPU and memory demands low, was a challenge. The daylight
                        harvesting algorithm, designed to keep the illuminance of an area constant, existed of a
                        PID-like formula. This formula learned from past errors, and tried to predict future errors, so
                        that the exact dimmer outputs could be reached much quicker.
                    </p>
                    <p>
                        The daylight temperature simulation algorithm, which was designed to simulate the color
                        temperature of the sun at any given time of the day, existed of a concatenation of sine
                        functions, which are easy to calculate, visualise and manipulate. Using a function of this type
                        allowed the user to configure the simulation curve to their needs, while keeping the serialised
                        data compact and calculations fast.
                    </p>
                </div>) },
        { title: "DevOps", content: (
                <div>
                    <p>
                        During my time at TELETASK, I did my best to further professionalise development and operations,
                        installing a more mature versioning system and build automation system and server, an automatic
                        testing suite, a CI server, static code analysing tools, professional IDE's and project
                        management tools. This allowed our team to release with reassurance, deploy quicker and in
                        general helped us meet deadlines while improving quality.
                    </p>
                </div>) },
        { title: "Aurus Fingers", content: (
                <div>
                    <p>
                        This was the first project by TELETASK Labs, a sub-division in the company I started that
                        creates proofs of concept, prototypes, demos,... This particular project looked like a regular
                        Aurus, the company's wall mounted touch panel, but instead of a touch screen, contained infrared
                        cameras that could track gestures. Waving a hand up and down could dim lights, while showing it
                        a few fingers could select a different area.
                    </p>
                    <p>
                        The project was displayed at Batibouw 2016, the largest Belgian construction fair, and was
                        praised for its ease of use and accuracy, but because of a high production cost at the time, it
                        never made it into a real product.
                    </p>
                </div>) },
        { title: "Alexa and Google Assistant", content: (
                <div>
                    <p>
                        My second project at TELETASK Labs, integration with voice assistants Alexa by Amazon and Google
                        Assistant, was a bigger success. The demo consisted of the two respective smart speakers,
                        presented next to a panel with a few lights. Using natural language, it was possible to control
                        those lights.
                    </p>
                    <p>
                        Alexa was an instant hit at Batibouw 2018, being the only working demo of a home
                        automation-voice assistant integration. A few weeks later at Light+Building 2018, the largest
                        construction fair in Europe, we had added Google Assistant, and again the two demos received
                        critical acclaim for being much more reliable and flexible than solutions by competitors.
                    </p>
                    <p>
                        Both services will be released by TELETASK later this year.
                    </p>
                </div>) }
    ];

    personalProjects = [
        { title: "Gotcha", content: (
                <div>
                    <p>
                        Gotcha is a work in progress. It is a CAPTCHA breaker, trained using PyTorch on AWS GPU
                        instances. It doesn't have much purpose except to help me learn more about PyTorch.
                    </p>
                </div>) },
        { title: "OCR Recipes", content: (
                <div>
                    <p>
                        This was a fun quick project to make our home recipe collection a bit more useable. We have a
                        large collection of scans of recipes from cookbooks from family and our own library. The problem
                        is that images cannot be searched. That's why I ran our collection through an OCR algorithm and
                        loaded everything into an Apache Solr instance, an open source search engine. A responsive
                        Angular frontend allows me and my girlfriend to search for chicken recipes whenever we have an
                        urge for protein.
                    </p>
                </div>) },
        { title: "Gecko", content: (
                <div>
                    <p>
                        Gecko was the result of my bachelor's thesis. I was part of a group of eight Informatics students
                        at the University of Ghent, tasked to design and develop a tool for Deloitte. I was team lead
                        for the project, tasked with communicating between the team and our customer, keeping the team
                        on focused and on track and managing the team's time sheets. I received high praise for both my
                        communication and programming skills in my peer reviews and a cum laude honor from the
                        university for my work on the project.
                    </p>
                    <p>
                        Aside from my work as team lead, I was lead frontend designer (AngularJS), and during the first
                        milestone had a large contribution to our Spring backend as well.
                    </p>
                </div>) },
        { title: "Yumi", content: (
                <div>
                    <p>
                        Yumi was a project I started without ever writing any code for it. I made it as an exercise in
                        prototyping using the Sketch app. I fell in love with the simplicity of the program immediately.
                        I used the free version of Invision and the Craft extension to make my prototype come to life.
                    </p>
                    <p>
                        The project itself was an app designed to facilitate the organisation of events with friends. At
                        the time, we were coming together with our group to watch a popular TV show, a weekly event, but
                        the location was usually unknown until the day of the event. The app would allow us to propose a
                        host, vote on a time, let people know you won't be able to make it this week, etc.
                    </p>
                </div>) },
        { title: "War of Kings", content: (
                <div>
                    <p>
                        After watching the first season of Game of Thrones, I was immediately hooked. At the time, I was
                        looking for a project to practice my PHP skills. I came up with the idea to make a GoT-like
                        game, featuring a Javascript powered map of Westeros. There was a large game engine, being
                        executed once every five minutes, moving armies, distributing messages, randomising recon
                        reports, etc. The entire project was hosted on a RaspberryPi 2 and contained more than 150.000
                        lines of code and spawned more than five years of design, development, testing and of course
                        playing.
                    </p>
                </div>) },
        { title: "PiTorrent", content: (
                <div>
                    <p>
                        PiTorrent was a test project with a Node.js backend and React frontend. It was an extension of
                        the popular WebTorrent torrent client. Both servers were designed to be run on a Raspberry Pi,
                        and would allow you to download a file once, and distribute it to all your workstations on the
                        local network. I noticed for instance that Ubuntu installers could be downloaded in a much more
                        efficient manner using such a topology. And it was a fun exercise to freshen up my Node.js
                        skills and get to know React a bit more.
                    </p>
                    <p>
                        I never released the project because of the bad reputation of the torrent technology.
                    </p>
                </div>) },
        { title: "Charity Webshop for Sint-Barbara", content: (
                <div>
                    <p>
                        During my last year at Sint-Barbara, our school held a sale of African art for charity. The goal
                        for each student was to sell a few articles. My religion teacher, spearheading the project, and
                        I came up with the plan to create a webshop to sell the art. A few weeks later, we opened the
                        shop and sold out in just a few days.
                    </p>
                </div>) },
        { title: "Pendulum", content: (
                <div>
                    <p>
                        Pendulum was a quick proof of concept of a few games for New Years Eve, a tradition between our
                        friends. The games were written for Electron and flashed images on the TV screen, along with
                        loud music and flashing lights (Philips Hue), synced to the music. A progressive web app was
                        used by the players to send their answers to the judges. We used the games the next year as
                        well, and later this year, they will be used during a team building event of an anonymous
                        international company.
                    </p>
                </div>) },
        { title: "CoolMovies", content: (
                <div>
                    <p>
                        This was one of my first Java projects. During the summer holidays, we often came together at a
                        friend's house to watch a movie, but all of us being movie geeks, it was difficult to find a
                        movie that all of us wanted to see, but none of us had already seen. We all use IMDB though, so
                        I wrote a program that joined all of our IMDB watchlists and subtracted the movies that at least
                        one of us had rated. The result was a gallery of posters that you could click, giving you some
                        of IMDB's details on the movie.
                    </p>
                    <p>
                        The program was written in Java Swing and has been discontinued.
                    </p>
                </div>) }
    ];

    render() {
        return (
            <section id="portfolio" className="section-portfolio">
                <h1>Portfolio.</h1>

                <div className="col-12 text-center">
                    <ul className="nav nav-pills" id="project-pills" role="tablist">
                        <Pill type="professional" />
                        <Pill type="personal" />
                    </ul>
                </div>

                <div className="container-fluid">
                    <div className="tab-content">
                        <ProjectCarousel name="professional" projects={ this.professionalProjects } />
                        <ProjectCarousel name="personal" projects={ this.personalProjects } />
                    </div>
                </div>
            </section>
        );
    }
}

let pillCounter = 0;
let projectCarouselCounter = 0;

function Pill(props) {
    let active = pillCounter++ === 0;

    return (
        <li className="nav-item text-capitalize">
            <a className={'nav-link' + (active ? ' active' : '')} id={props.type + '-projects-tab'} data-toggle="tab" href={'#' + props.type + '-projects'} role="tab" aria-controls={props.type + '-projects'} aria-selected={ active }>
                { props.type }
            </a>
        </li>
    );
}

function ProjectCarousel(props) {
    let active = projectCarouselCounter++ === 0;

    return (
        <div id={props.name + '-projects'} className={'tab-pane carousel slide projects-carousel' + (active ? ' active' : '')} data-interval="false" role="tabpanel" aria-labelledby={props.name + '-projects-tab'} data-ride="carousel">
            <ol className="carousel-indicators">
                { createCarouselIndicators(props.projects) }
            </ol>
            <a className="carousel-control-prev" href={'#' + props.name + '-projects'} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <div className="carousel-inner">
                { createCarouselItems(props.projects) }
            </div>
            <a className="carousel-control-next" href={'#' + props.name + '-projects'} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

function createCarouselItems(items) {
    let carouselItemCounter = 0;
    return items.map(function(item) {
        let active = carouselItemCounter++ === 0;

        return (
            <div className={'carousel-item' + (active ? ' active' : '')}>
                <h3>{ item.title }</h3>
                { item.content }
            </div>
        );
    });
}

function createCarouselIndicators(items) {
    let carouselIndicatorCounter = 0;
    return items.map(function() {
        let active = carouselIndicatorCounter++ === 0;

        return (
            <li data-target="#professional-projects" data-slide-to={carouselIndicatorCounter-1} className={active ? ' active' : ''}></li>
        );
    });
}

export default PortfolioSection;