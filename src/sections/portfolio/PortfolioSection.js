import React, {Component} from "react";
import './portfolio.css'

class PortfolioSection extends Component {
    professionalProjects = [
        { title: "Cloud Services", content: (<p>qsdfmlkj</p>) },
        { title: "Algorithms for Lighting", content: (<p>qsdfmlkj</p>) },
        { title: "DevOps", content: (<p>qsdfmlkj</p>) },
        { title: "Aurus Fingers", content: (<p>qsdfmlkj</p>) }
    ];

    personalProjects = [
        { title: "PiTorrent", content: (<p>qsdfmlkj</p>) },
        { title: "Yumi", content: (<p>qsdfmlkj</p>) },
        { title: "OCR Recipies", content: (<p>qsdfmlkj</p>) },
        { title: "War of Kings", content: (<p>qsdfmlkj</p>) },
        { title: "Gecko", content: (<p>qsdfmlkj</p>) },
        { title: "OKS", content: (<p>qsdfmlkj</p>) },
        { title: "Charity Webshop for Sint-Barbara", content: (<p>qsdfmlkj</p>) },
        { title: "Pendulum", content: (<p>qsdfmlkj</p>) },
        { title: "CoolMovies", content: (<p>qsdfmlkj</p>) },
        { title: "Subtitle Correction", content: (<p>qsdfmlkj</p>) }
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