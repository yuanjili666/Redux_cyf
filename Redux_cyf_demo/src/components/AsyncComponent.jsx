import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        state = {component: null}

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({component})
        }

        render() {
            const {component: C} = this.state
            return C ? <C {...this.props} /> : null;
        }
    }
    return withRouter(AsyncComponent);
}
