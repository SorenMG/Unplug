import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Jobs/Single';

class JobsSingleContainer extends Component {
  constructor() {
    super();
    this.state = { loading: false, error: null, id: null };
  }

  /**
   * Render
   */
  render = () => {
    const { loading, error } = this.state;
    const { id, listData } = this.props;
    const job = listData.filter((item) => item.id === id)[0];

    return <Layout loading={loading} error={error} job={job} />;
  };
}

JobsSingleContainer.propTypes = {
  id: PropTypes.number,
  listData: PropTypes.array,
};

JobsSingleContainer.defaultProps = {
  id: null,
};

const mapStateToProps = (state) => ({
  listData: state.jobs.listData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobsSingleContainer);
