import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from "./Components/Profile/Profile";
import Users from "./Components/UsersPage/UsersPage";
import SignIn from "./Components/Login/LoginPage";
import {Provider} from "react-redux";
import {store} from "./Store";
import CompositeStatistic from "./Components/CompositeStatistic/CompositeStatistic";

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Route path='/users' component={Users}/>
            <Route path='/user/:id' component={Profile}/>
            <Route path='/statistic/:usertype' component={CompositeStatistic}/>
            <Route path='/login' component={SignIn}/>
        </BrowserRouter>
        </Provider>
);
}

export default App;