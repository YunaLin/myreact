import React, {Component} from 'react';
import {Link} from 'react-router';
// 定义App组件
export default class App extends Component {
    // 这个构造函数是为了后面能够调用this.props
    constructor(props) {
        super(props);
    }
    // 添加Link组件链接
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role='nav'>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/repos'>Repos</Link></li>
                </ul>
                {/* 嵌套路由，将子路由的组件内容显示在App组件中 */}
                <div>{this.props.children}</div>
            </div>
        );
    }
}