import React from "react";

export class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 1,
      tag: "",
      country: "",
      region:  this.getRandomRegion(),
      displayFrom: "2018-01-31",
      displayTo: "2018-12-31"
    }
  }

  onAddAlert() {
    this.setFieldValues();
    this.props.addAlert(this.state);
  }

  setFieldValues() {
    const newId = this.state.id + 1;
    this.setState({
      id: newId,
      region: this.getRandomRegion()
    });
  }

  getRandomRegion() {
    const regions = ['Europe', 'EMEA', 'North America', 'LATAM'];
    return regions[Math.floor(Math.random()*regions.length)];
  }

  handleTagChange(event) {
    this.setState({tag: event.target.value});
  }

  handleCountryChange(event) {
    this.setState({country: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-5">
            <label>Alert Tag:</label>
            <div className="input-group mb-6">
              <input type="text" className="form-control" value={ this.state.tag } onChange={(event) => this.handleTagChange(event) } />
            </div>
          </div>
          <div className="col-sm-6">
            <label>Country:</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={ this.state.country } onChange={(event) => this.handleCountryChange(event) } />
            </div>
          </div>
        </div>
        <div className="row">
          <button onClick={ this.onAddAlert.bind(this) } className="btn btn-primary">Add Alert</button>
        </div>
      </div>
    );
  }
}