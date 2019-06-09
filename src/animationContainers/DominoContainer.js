import React, { Component } from 'react'
import FallingElement from './animations/FallingEle';
// import Form from './Form';
// import BasicExample from './router';
// import Table from './table'


class DominoContainer extends Component {

    state = {
    };

    render() {
        return (
            <div className="dominoContainer">
            <FallingElement/>
            </div>
        )
    }
}



export default DominoContainer
