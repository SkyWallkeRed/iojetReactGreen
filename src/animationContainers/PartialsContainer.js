import React, { Component } from 'react';
import './styles/particalsConStyle.css';
import MultipleElements from "./animations/MultipleElements";

class ParticalsContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className="">
                <MultipleElements />
            </div>
        );
    }
}

export default ParticalsContainer
