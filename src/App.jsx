import "./App.css";

import React from "react";
import { connect } from "react-redux";

import Dataset from "./dataset/Dataset";
import { getDatasets } from "./api/api";
import { updateDatasets } from "./store/store";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Dataset Statistics</h1>
        {this.props.datasets.map(dataset => {
        return (
        <Dataset key={dataset.dataset_id} dataset={dataset} />)})}
      </div>
    );
  }

  componentDidMount() {
    getDatasets().then(data => {
      console.log(data);
      this.props.updateDatasets(data);
    });
  }
}

const mapStateToProps = state => ({
  datasets: state.datasets
});

const mapDispatchToProps = dispatch => ({
  updateDatasets: datasets => dispatch(updateDatasets(datasets))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
