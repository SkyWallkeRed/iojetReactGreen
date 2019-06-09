import { CSSPlugin, AttrPlugin }  from "gsap/all";

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import HomeContainer from './containers/homeContainer';
import RouterNav from './RouterNav';
// import RouterNav from './RouterNav';
import * as serviceWorker from './serviceWorker';
// import { TweenMax, Power2 } from "gsap/umd/TweenMax";
// import ScrollToPlugin from "gsap/umd/ScrollToPlugin";
// import Draggable from "gsap/umd/Draggable";
// import MorphSVGPlugin from "./gsap-bonus/MorphSVGPlugin";
// import SplitText from "./gsap-bonus/SplitText";
const plugins = [ CSSPlugin, AttrPlugin ];

ReactDOM.render(<RouterNav />, document.getElementById('root'));
// ReactDOM.render(<HomeContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
