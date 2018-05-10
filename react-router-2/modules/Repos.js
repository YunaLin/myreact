import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink';

export default class Repos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Repos</h2>
                {/* 添加链接 */}
                <ul>
                    <li><NavLink to='/repos/reactjs/react-router'>React Router</NavLink></li>
                    <li><NavLink to='/repos/facebook/react'>React</NavLink></li>
                </ul>

                <div>{this.props.children}</div>
            </div>           
        );
    }
}