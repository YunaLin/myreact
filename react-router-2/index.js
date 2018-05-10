import React from 'react';
import ReactDOM from 'react-dom';
// index.js和modules在同级目录下
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Repo from './modules/Repo';
import Home from './modules/Home';

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
            {/* 添加IndexRoute组件 */}
            <IndexRoute component={Home} />
            <Route path='/about' component={About} />
            <Route path='/repos' component={Repos}>
                {/* 添加Repo路由,多层嵌套路由 */}
                <Route path='/repos/:userName/:repoName' component={Repo} />
            </Route>
        </Route>
    </Router>
    ), document.getElementById('app')
);