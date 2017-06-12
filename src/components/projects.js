import React from 'react';


class Projects extends React.Component{
    render(props){
        return(
            <div className="projectCard">
                <h6 className="projectTitle">{this.props.name}</h6>
                <img src={this.props.mainImg} className="projectimg" alt="splash page for app"/>
            </div>
        )
    }
}

export default Projects;