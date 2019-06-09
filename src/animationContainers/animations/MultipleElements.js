import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import { screenOverlay, windowHeight, windowWidth } from "../../assets/screenCalcForOverLay"
import '../styles/multipale-ele.css'

const eleWidth = screenOverlay[ 0 ].size;
const eleHeight = screenOverlay[ 0 ].size;

const eleStyle = {
    // position: 'relative',
    maxWidth: eleWidth,
    maxHeight: eleHeight,
    // float: 'right',
    // opacity: 0,
    // top: windowHeight - screenOverlay[ 0 ].size
};

const imgStyle = {
    maxWidth: 'inherit',
    maxHeight: 'inherit',
};

class MultipleElements extends Component {

    constructor(props) {
        super(props);
        // cards, elements tha will be used in the tween
        this.cards = [];
        // the timeline instance
        this.iconsAnimation = new TimelineLite({ paused: true });
        // this.cardsTween;
    }

    componentDidMount() {
        this.iconsAnimation.staggerTo(this.cards, 0.5, {position: 'absolute' ,opacity: 1, autoAlpha: 1, x: windowWidth / 2, y: windowHeight / 2 }, 0.1)
        .to(this.cards, 0.3, {
            autoAlpha: 1,
            y: (windowHeight - screenOverlay[ 0 ].size / 2),
            width: screenOverlay[ 0 ].size / 2,
            height: screenOverlay[ 0 ].size / 2,
        });
    }

    render() {
        this.iconsAnimation.kill().clear().pause(0);
        this.iconsAnimation.play();
        return <div className="col-12">
            <div className="row ">

                <div className="col-12 controlPanel">
                    {/* buttons */}
                    {/*<h3 className="text-center">Control Timeline</h3>*/}
                    <div className=" btn-group">
                        <button
                            className="btn gsap-btn"
                            onClick={() => this.iconsAnimation.play()}
                        >Play
                        </button>
                        <button
                            className="btn gsap-btn"
                            onClick={() => this.iconsAnimation.pause()}
                        >Pause
                        </button>
                        <button
                            className="btn gsap-btn"
                            onClick={() => this.iconsAnimation.reverse()}
                        >Reverse
                        </button>
                        <button
                            className="btn gsap-btn"
                            onClick={() => this.iconsAnimation.restart()}
                        >Restart
                        </button>
                    </div>
                </div>

                {// map through the elements
                    screenOverlay.map((element, index) => (

                        <img
                            key={index}
                            // className="col-12 col-sm-6 col-md-4 card-element"
                            ref={div => this.cards[ index ] = div}
                            style={eleStyle}
                            className=""
                            src={element.src} alt=""/>

                    ))}
            </div>
        </div>;
    }
}

export default MultipleElements;
