import React, { Component } from 'react';
import { connect } from "react-redux";
import BreadcrumbsComp from 'components/Content/Root/Breadcrumbs/Breadcrumbs'

class Breadcrumbs extends Component {
  render() {
    const { activeRepo, activePath } = this.props.state;
    return (
      <BreadcrumbsComp>{activeRepo}</BreadcrumbsComp> 
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.repos
  };
}

export default connect(
  mapStateToProps
)(Breadcrumbs);