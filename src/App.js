import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(console.log);
  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
