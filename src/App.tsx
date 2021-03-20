import React from 'react';
import Header from "./Header";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from "./Profile";
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route path='/users' /*component={}*//>
            <Route path='/prorectors' component={Profile}/>
            <Route path='/struct' /*component={}*//>
            <Route path='/university' /*component={}*//>
            <Route path='/employee' /*component={}*//>
        </BrowserRouter>
);
}

export default App;