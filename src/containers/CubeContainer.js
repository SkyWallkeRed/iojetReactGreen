import React, { Component } from 'react'
import CubeComponent from '../animationContainers/animations/cube/Cube';
import DominoContainer from '../animationContainers/DominoContainer';
import ParticalsContainer from '../animationContainers/PartialsContainer';
import CrossBlue from '../components/CrossBlue';
import RouterNav from '../RouterNav';
// import Form from './Form';
// import BasicExample from './router';
// import Table from './table'



class CubeContainer extends Component {

    state = {};

    render() {
        return (
            <div className="">
                {/*<DominoContainer/>*/}
                {/*<CubeComponent/>*/}
                {/*<RouterNav/>*/}
                <CubeComponent/>
            </div>
        )
    }
}


export default CubeContainer
