import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Jobs/Single';

class JobsSingleContainer extends Component {
  constructor() {
    super();
    this.state = { loading: false, error: null, job: {} };
  }

  /**
   * Render
   */
  render = () => {
    const { loading, error } = this.state;
    const { job } = this.props;

    return <Layout loading={loading} error={error} job={job} />;
  };
}

JobsSingleContainer.propTypes = {};

JobsSingleContainer.defaultProps = {
  id: null,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobsSingleContainer);
