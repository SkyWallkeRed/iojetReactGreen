import React, { Component } from 'react'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite } from "gsap/TweenMax";
import { screenOverlay, windowHeight, windowWidth } from '../assets/screenCalcForOverLay';

const divStyle = {
    // maxWidth: windowWidth,
    // maxHeight: windowHeight / 5,
    backgroundColor: '#2a91ff',
    height: windowWidth / 5,
    width: windowWidth,
    // position: 'absolute',
    opacity: 0,
    // right: 0,
};
const textStyle = {
    position: 'relative',
    top: '-50%',
    left: '30%',
    color: 'lightgray',
    fontSize: 50,
    // opacity: '',
    paddingLeft: 20,
};
const green = {
    marginTop: 20,
    height: 50,
    width: 50,
    // backgroundColor: 'green'
};
const boxPos = {
    width: 200,
    position: 'absolute',
    top: windowHeight - 200,
    left: (windowWidth / 2) - screenOverlay[ 0 ].size
};

class CrossBlue extends Component {

    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
        this.stripAnimation = new TimelineLite({ paused: true });
    }

    componentDidMount() {
        this.stripAnimation.staggerTo('.stripContainer', 1, {
            rotation: -90,
            // delay: 1,
            // repeat: -1,
            // repeatDelay: 1,
            // yoyo: true,
            immediateRender: false
        }).to('.stripContainer', 1, { opacity: 1 }).to('.stripContainer', 1, { x: '40%' });
        // this.myTween = TweenLite.to(this.myElement, 1, {x: 300, y: 300, opacity: 0.4});


        // use the node ref to create the animation
        const t = TweenMax.fromTo(".green", 5, { x: -20 }, { x: windowWidth + 200, repeat: 0 });
        t.progress(0.5).pause();

        document.onclick = function () {
            t.play();
            // this.stripContainer.play();
            // this.stripAnimation.play();
        }
    }

    render() {
        this.stripAnimation.kill().clear().pause(0);
        this.stripAnimation.play();
        return <div>
            <div className={'stripContainer'} style={divStyle}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GD0iFTHDXhfV-NQHtlOPtJI9bJITOgzsk-oEhCiDsNEpkVZA"
                    alt=""/>
                <p style={textStyle}> David Ohana</p>
            </div>
            {/*<img className={'green'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ku6a_ovqb8OUsl8G0voh6scPMjxSGAyu9x6wY07rbEpHo4Gf" alt=""/>*/}
            <img src='https://dallas.skincareshows.com/new/wp-content/uploads/2016/11/register-dallas.png' alt=""
                 style={green} className={'green'}/>

            <img style={boxPos}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ku6a_ovqb8OUsl8G0voh6scPMjxSGAyu9x6wY07rbEpHo4Gf"
                 alt=""/>
        </div>;
    }
}


export default CrossBlue
