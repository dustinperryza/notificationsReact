import React from "react";

export class DataHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <td><h6>ID</h6></td>
          <td><h6>TAG</h6></td>
          <td><h6>TYPE</h6></td>
          <td><h6>COUNTRY OR REGION</h6></td>
          <td><h6>VALID FROM</h6></td>
          <td><h6>VALID TO</h6></td>
        </tr>
      </thead>
    );
  }
}