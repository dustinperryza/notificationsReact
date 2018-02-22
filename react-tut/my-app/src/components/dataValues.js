import React from "react";

export class DataValues extends React.Component {
  handleClick() {
    console.info('click key = ', this.props.id);
    this.props.onRemoveAlert(this.props.id);
  }

  render() {
    return (
      <tr onClick={ this.handleClick.bind(this) }>
        <td>{ this.props.alert.id }</td>
        <td>{ this.props.alert.tag }</td>
        <td>{ this.props.alert.country }</td>
        <td>{ this.props.alert.region }</td>
        <td>{ this.props.alert.displayFrom }</td>
        <td>{ this.props.alert.displayTo }</td>
      </tr>
    );
  }
}