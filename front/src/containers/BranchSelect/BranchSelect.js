import React, { Component, FC } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as actions from "actions/Branches";
import {Branch} from 'components/Content/Root/Branch/Branch'

class BranchSelect extends Component {
  render() {
    const { activeBranch, activeRepo } = this.props.state
    return (
      <Branch repo={activeRepo} branch={activeBranch} />
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.repos
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(BranchSelect);