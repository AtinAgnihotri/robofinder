import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops! There seems to have been an Unforeseen error. Don't worry, we'll fix it in no time!</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;
