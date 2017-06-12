import React from 'react';
import Projects from './projects';
import firebaseObject from './firebase';

const portfolioRefs = firebaseObject.portfolioRefs;
let projects;
class ProjectContainer extends React.Component{
    componentDidMount(){
        console.log('mounted')
        console.log(portfolioRefs);
        portfolioRefs.on('value', snapshot=>{
            snapshot.forEach(project =>{
                let projectObject = project.val();
                console.log(projectObject, 'the project object');
            })
        })
    }
    render(){
        console.log(projects);
        return(
            <div>
                I mounted
            </div>
        )
    }
}
export default ProjectContainer;