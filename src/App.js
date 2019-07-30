import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import configureStore from './store/store';
import {PersistGate} from "redux-persist/integration/react";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends Component {
    render() {
        const {persistor, store} = configureStore();
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <PersistGate loading={null} persistor={persistor}>
                        <Fragment>
                            <Header/>
                            <Route path='/' exact component={Home}/>
                        </Fragment>
                    </PersistGate>
                </BrowserRouter>
                <Alert stack={{limit: 1}}/>
            </Provider>
        );
    }
}

export default App;
