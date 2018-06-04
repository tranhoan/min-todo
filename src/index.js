import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, withRouter} from "react-router-dom";
const Content = withRouter(props => <App pathname={props.location.pathname}/>);
ReactDOM.render(
    <HashRouter>
        <Content />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
