import React from 'react';
import Header from './header';
import Welcome from './welcome';
import ProjectContainer from './projectcontainer';

export default function Portfolio(){
    return (
        <div>
            <Header />
            <Welcome />
            <ProjectContainer />
        </div>
    )
}