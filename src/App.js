import React, { Component } from 'react';
import InputForm from './InputForm'

class App extends Component {
  render() {
    return (
      <div style={styles.container} className="App">
        <InputForm />
      </div>
    )
  }
}

const styles = {
  container: {
    padding: "100px 300px",
    background: "#f5f5f5",
  }
}

export default App;
