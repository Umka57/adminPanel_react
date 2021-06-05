import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from "./Components/Profile/Profile";
import Users from "./Components/UsersPage/UsersPage";
import {Provider} from "react-redux";
import {store} from "./Store";
import CompositeStatistic from "./Components/CompositeStatistic/CompositeStatistic";
import SignIn from "./Components/Login/LoginPage";

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Route path='/users' component={Users}/>
            <Route path='/user/:id' component={Profile}/>
            <Route path='/statistic/:usertype' component={CompositeStatistic}/>
        </BrowserRouter>
        </Provider>
);
}

export default App;