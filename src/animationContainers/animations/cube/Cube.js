import React, { Component } from 'react'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite } from "gsap/TweenMax";
import './cube.css';
import RouterNav from '../../../RouterNav';
import ParticalsContainer from '../../PartialsContainer';

const Cube = {
    backgroundColor: 'black',
    height: '100px',
    width: '100px',
};
const noBackground = {
    backgroundColor: 'none',
    padding: 0
};


class CubeComponent extends Component {

    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('*********************************************');
        const cube = document.getElementsByClassName('cube')[ 0 ];
        cube.classList.remove('cubeAnimation');
        cube.classList.add('cubeAnimationToStop');
        // document.getElementsByClassName('front')[0].classList.add('boomFront');
        // document.getElementsByClassName('back')[0].classList.add('boomBack');
        // document.getElementsByClassName('right')[0].classList.add('boomRight');
        // document.getElementsByClassName('left')[0].classList.add('boomLeft');
        // document.getElementsByClassName('top')[0].classList.add('boomTop');
        // document.getElementsByClassName('bottom')[0].classList.add('boomBottom');
        // this.myTween = TweenLite.to(this.myElement, 1, {display:'none'});
    }

    componentDidMount() {
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 2.5, { y: '100%' });

    }

    exploadCube() {
        console.log('boom');
    }

    render() {

        return <div ref={div => this.myElement = div} align="center">

            {/*<div style="text-align:center;padding:10px;">*/}
            {/*<h2>3D CSS Animated Cube</h2>*/}
            {/*<div>*/}
            {/*This simple 3D cube animation is a good way to get started with concepts like css3 3d transforms,*/}
            {/*translations, rotations..<br/>*/}

            {/*Check out the Tutorial and source code download : <a*/}
            {/*href="http://www.codicode.com/art/animated_3d_css_cube.aspx" target="_blank">pure CSS Animated 3D*/}
            {/*Cube</a>, by <a href="http://www.codicode.com" target="_blank">Codicode</a>.*/}
            {/*</div>*/}
            {/*</div>*/}
            <div className="wrap" onClick={this.handleClick}>
                <div className="cube cubeAnimation" >
                    <div className="front">
                        {/*<h2>Front side</h2>*/}
                        {/*<ul>*/}
                        <p className="enterTextPtag"><a className="enterTextAtag"  href="/home">ENTER</a></p>
                        {/*<p><a href="/topics">topics</a></p>*/}
                        {/*<li>*/}
                        {/*<Link to="/">Home</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*<Link to="/about">About</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*<Link to="/topics">Topics</Link>*/}
                        {/*</li>*/}
                        {/*</ul>*/}
                        {/*<ParticalsContainer/>*/}
                    </div>
                    <div className="back">
                        {/*<h2>Back side</h2>*/}
                        <p className="enterTextPtag"><a className="enterTextAtag" href="/home">ENTER</a></p>

                    </div>
                    <div className="top">
                        {/*<h2>Top side</h2>*/}
                        <p className="enterTextPtag"><a className="enterTextAtag" href="/home">ENTER</a></p>

                    </div>
                    <div className="bottom">
                        {/*<h2>Bottom side</h2>*/}
                        <p className="enterTextPtag"><a className="enterTextAtag" href="/home">ENTER</a></p>

                    </div>
                    <div className="left">
                        {/*<h2>Left side</h2>*/}
                        <p className="enterTextPtag"><a className="enterTextAtag" href="/home">ENTER</a></p>

                    </div>
                    <div className="right">
                        {/*<h2>Right side</h2>*/}
                        <p className="enterTextPtag"><a className="enterTextAtag" href="/home">ENTER</a></p>

                    </div>
                </div>
            </div>


            {/*<div style="text-align:center;padding-top:150px;">*/}
            {/*Hover the CUBE to expand!*/}
            {/*</div>*/}
        </div>
    }
}


export default CubeComponent
