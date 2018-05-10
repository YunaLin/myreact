import React from 'react';

export default class Repo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* 获取路由路径repos/:userName/:repoName的具体值 */}
                <h2>{ this.props.params.repoName }</h2>
            </div>
        );
    }
}