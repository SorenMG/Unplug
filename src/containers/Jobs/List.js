import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Jobs/List';

class JobPostingContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      error: null,
      loading: false,
    };
  }
  /**
   * Render
   */
  render = () => {
    const { listData, filter } = this.props;
    const { loading, error } = this.state;

    const data = listData.filter(filter);

    return <Layout listData={data} loading={loading} error={error} />;
  };
}

JobPostingContainer.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filter: PropTypes.func,
};

JobPostingContainer.defaultProps = {
  filter: () => true,
};

const mapStateToProps = (state) => ({
  listData: state.jobs.listData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingContainer);
