import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/User/Balance';

class BalanceContainer extends Component {
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

BalanceContainer.propTypes = {};

BalanceContainer.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);
