import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CubeComponent from './animationContainers/animations/cube/Cube';
import CubeContainer from './containers/CubeContainer';
import HomeContainer from './containers/homeContainer';
import MainContainer from './containers/MainContainer';
// import App from './App';
const style = {
    backgroundColor:'white',
    // padding: '0!important'
};
function RouterNav() {
    return (
        <Router>
            <div style={style}>
                {/*<ul>*/}
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

                {/*<hr />*/}

                <Route exact path="/" component={Cube} />
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
}

function Cube() {
    return (
        <CubeContainer/>
    )
}

function Home() {
    // return <div />
    return (
        <MainContainer/>
    )
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Topics({ match }) {
    return (
        <div>
            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default RouterNav;
