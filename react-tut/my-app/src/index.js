import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/header';
import { Data } from './components/data';
import { Form } from './components/form';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      alerts: []
    }
  }

  addAlert(alert) {
    let alertsArray = this.state.alerts;

    alertsArray.push(alert);

    this.setState({
      alerts: alertsArray
    });
  }
  
  removeAlert(key) {
    console.info('remove alert - ', key);

    let alertsArray = this.state.alerts;
    alertsArray.splice(key, 1);

    this.setState({
      alerts: alertsArray
    });
  }

  render() {
    console.info('state - ', this.state);
    return (
      <div className="container">
        <Header />
        <hr />
        <Data alertData={this.state} removeAlert={this.removeAlert.bind(this)} />
        <hr />
        <Form addAlert={this.addAlert.bind(this)}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
