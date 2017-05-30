import React from 'react';
import Header from '../Header/Header';
import './About.css';
export default function About(){
    return (
        <div>
            <Header />
            <h1 className="intro">Hello World!</h1>
            <p className="about">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
    )
}