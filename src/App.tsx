import React from 'react';
import Header from "./Header";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from "./Profile";
import Users from "./UsersPage";
function App() {
    return (
        <BrowserRouter>
            <Header/>
            {/*<Route path='/main' component={}/>*/}
            <Route path='/users' component={Users}/>
            <Route path='/prorectors' component={Profile}/>
            <Route path='/struct' component={Profile}/>
            <Route path='/university' /*component={}*//>
            <Route path='/employee' component={Profile}/>
        </BrowserRouter>
);
}

export default App;