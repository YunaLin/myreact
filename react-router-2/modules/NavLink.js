import React from 'react';
import {Link} from 'react-router'

export default class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }
    // 这里的…this.props点点点，使用了延展操作符（spread operator），它可以传递一组属性键值对给<Link/>
    render() {
        return (
            <Link {...this.props} activeClassName='active'/>
        );
    }
};