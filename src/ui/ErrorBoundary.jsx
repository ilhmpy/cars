import React, { Component } from 'react';
import { ErrorScreen } from './ErrorScreen';

class ErrorBoundary extends Component {
  state = {
    isError: false
  };

  componentDidCatch() {
    this.setState({isError: true});
  };

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    
    if (isError) {
      return <ErrorScreen />;
    };
    
    return children;
  };
};

export { ErrorBoundary };