import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/User/Main';

class MainUserContainer extends Component {
  constructor() {
    super();
    this.state = { loading: false, error: null };
  }

  /**
   * Render
   */
  render = () => {
    const { loading, error } = this.state;

    return <Layout loading={loading} error={error} />;
  };
}

MainUserContainer.propTypes = {};

MainUserContainer.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainUserContainer);
