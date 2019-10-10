import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "actions/Repos";
import { Dropdown } from 'components/Base/Patterns/Dropdown';

class RepoSelect extends Component {
  componentDidMount() {
    this.props.actions.loadReposList()
  }

  render() {
    const { repos, isRepoSelectOpen, activeRepo } = this.props.state;
    const { toggleDropdown, repoSelect } = this.props.actions;
    return (
      <Dropdown 
        size='m' 
        active={true} 
        label='Repository' 
        param={activeRepo} 
        itemsList={repos}
        isOpen={isRepoSelectOpen} 
        onClick={()=>toggleDropdown(!isRepoSelectOpen)} 
        repoSelect={repoSelect}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.repos
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
)(RepoSelect);