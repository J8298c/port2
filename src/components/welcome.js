import React from 'react';
import './welcome.css';

export default function Welcome(){
    return(
        <div>
            <div className="welcom">
                <h1>Hi I'm <span className="name">Julio</span></h1>
            </div>
            <div className="title">
                <h4>I am a <span className="name">Full Stack Developer</span></h4>
            </div>
            <div className="about">
                <p className="about">I am full stack dev from NYC,  mention JS Node Python GO, and myself<code className="language-javascript">
                    if('under contruction' === true){
                        console.log('Sorry come back again')
                    } else {
                        console.log('dazzle')
                    }
                    </code></p>
            </div>
        </div>
    )
}