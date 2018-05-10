import React from 'react';
import ReactDOM from 'react-dom';
// index.js和modules在同级目录下
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import {Router, Route, hashHistory} from 'react-router'

// ReactDOM.render(
//     <About/>,
//     document.getElementById('app')
// );
ReactDOM.render((
    <Router history={hashHistory}>
        {/* 非嵌套路由
        <Route path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/repos' component={Repos} /> */}
        
        {/* 嵌套路由 */}
        <Route path='/' component={App}>
            <Route path='/about' component={About} />
            <Route path='/repos' component={Repos} />
        </Route>
    </Router>
    ), document.getElementById('app')
);