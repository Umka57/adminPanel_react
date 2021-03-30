import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from "./Components/Profile/Profile";
import Users from "./Components/UsersPage/UsersPage";
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