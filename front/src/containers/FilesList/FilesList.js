import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "actions/Files";
import Table from 'components/Content/Root/Table/Table'

class FilesList extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { activeRepo, activeBranch, activePath  } = this.props.stateRepos
    if (prevProps.stateRepos.activeRepo !== activeRepo) {
      this.props.actions.loadFilesList(activeRepo, activeBranch, activePath)
    }
  }

  render() {
    const { files } = this.props.state;
    return (
      <Table data={files}/>
    )
  }
}


function mapStateToProps(state) {
  return {
    state: state.files,
    stateRepos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesList);