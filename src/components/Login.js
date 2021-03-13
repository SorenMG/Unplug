import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Button, Grid, Col, Thumbnail } from 'native-base';
import { Error } from './UI';

const Login = ({ error, onPressLogin }) => {
  if (error) {
    return <Error content={error} />;
  }

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }}>
        <Grid style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col style={{ width: 300, alignItems: 'center' }}>
            <Thumbnail
              square
              style={{ width: 100, height: 100, margin: 8 }}
              source={require('../../assets/icon.png')}
            />
            <Text note>Unplugging without disconnecting</Text>
            <Button block style={{ margin: 8 }} onPress={onPressLogin}>
              <Text>Connect to Facebook</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

Login.propTypes = {
  error: PropTypes.string,
  onPressLogin: PropTypes.func.isRequired,
};

Login.defaultProps = {
  error: null,
  onPressLogin: () => null,
};

export default Login;
