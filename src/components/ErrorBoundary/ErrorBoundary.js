import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        ErrorMessage: ''
    }
    catchError = (err, info) => {
        this.setState({
            hasError: true,
            ErrorMessage: err
        })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>{this.state.ErrorMessage}</h1> <br />
                    {this.state.errorInfo.componentStack}
                </div> )
        }
        else return this.props.children
    }

}

export default ErrorBoundary;