import React from 'react';
import './header.css';

class Header extends React.Component{ 
    componentWillMount(){
        return(
            (window, document)=> {
                document.getElementById('toggle').addEventListener('click', function (e) {
                    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
                    document.getElementById('toggle').classList.toggle('x');
                });
            }
        )
    }
    render(){
        return(
            <div>
                <div className="custom-menu-wrapper">
                    <div className="pure-menu custom-menu custom-menu-top">
                        <a href="#Home" className="pure-menu-heading custom-menu-brand">Brand</a>
                        <a href="#toggle" className="custom-menu-toggle" id="toggle">
                            <s className="bar"></s>
                            <s className="bar"></s>
                        </a>
                    </div>
                    <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                        <div className="custom-menu-screen"></div>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#home" className="pure-menu-link">Home</a></li>
                            <li className="pure-menu-item"><a href="#about" className="pure-menu-link">About</a></li>
                            <li className="pure-menu-item"><a href="#project" className="pure-menu-link">Projects</a></li>
                            <li className="pure-menu-item"><a href="#Skills" className="pure-menu-link">Skills</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;