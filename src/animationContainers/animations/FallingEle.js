import React, { Component } from 'react'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite } from "gsap/TweenMax";


const fallingEleStyle = {
    backgroundColor: 'black',
    height: '100px',
    width: '100px'
};

class FallingElement extends Component {

    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }

    componentDidMount() {
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 1, { x: 300, y: 300 });

    }

    render() {
        return <div style={fallingEleStyle} ref={div => this.myElement = div}/>;
    }
}


export default FallingElement
