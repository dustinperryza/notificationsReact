import React from "react";
import { DataHeader } from './dataHeader';
import { DataValues } from './dataValues';
import { EmptyData } from './emptyData';

export class Data extends React.Component {
  onRemoveAlert(key) {
    this.props.removeAlert(key);
  }

  render() {
    return (
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <DataHeader/>
            <tbody>
              { this.props.alertData.alerts.length ? this.props.alertData.alerts.map((alert, i) => <DataValues alert={alert} key={i} id={i} onRemoveAlert={this.onRemoveAlert.bind(this)}/> ) : <EmptyData/> }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}