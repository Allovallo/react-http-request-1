import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
