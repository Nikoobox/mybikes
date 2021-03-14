import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import StationsContainer from './splash/StationsContainer';
import StationStatusContainer from './splash/StationStatusContainer';
const App = () => (
    <div className='app'>
        <Navbar />
        <Switch>
            <Route exact path="/" component={StationsContainer} />
            <Route exact path="/:stationId" component={StationStatusContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;