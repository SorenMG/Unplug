import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';

const JobsSingle = ({ error, loading, job, reFetch, ...props }) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (loading) {
    return <Loading content={loading} />;
  }

  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

JobsSingle.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
};

JobsSingle.defaultProps = {
  error: null,
  loading: false,
};

export default JobsSingle;
