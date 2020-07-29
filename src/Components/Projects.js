import React, { Component } from 'react';


class Projects extends Component {
    render() {

        if (this.props.data) {
            var description = this.props.data.description
            var projects = this.props.data.projects.map(function (projects) {
                var projectsimage = "images/" + projects.image;
                var alt = 'picture of ' + projects.name
                return (
                    <section id="projects">
                        <div className="row">
                            <div className="three columns">
                                <img className="projects-pic" src={projectsimage} alt={alt} />
                            </div>
                            <div className="nine columns main-col">
                                <h2>{projects.name}</h2>
                                <h3>About Project</h3>
                                <p>{projects.description}</p>
                            </div>
                        </div>

                    </section>
                )
            })

        }

        return (
            <section id="projects">
                <h4>{description}</h4>
                {projects}
            </section>
        );
    }
}

export default Projects;
