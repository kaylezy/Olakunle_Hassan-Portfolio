import React, { Component } from "react";
import ErrorImg from "../../assets/eror.png";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      <div>
        <img src={ErrorImg} alt="" />
      </div>;
      // Render a fallback UI when there is an error
      return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            An error occurred in the application.
          </p>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-400 to-purple-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => window.location.reload()}
          >
            Reload the Page
          </button>
        </div>
      );
    }

    // When there's no error, render children components
    return this.props.children;
  }
}

export default ErrorBoundary;
