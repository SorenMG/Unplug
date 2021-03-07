import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Card,
  CardItem,
  Grid,
  Row,
  H1,
  Text,
  View,
  Item,
  Left,
  Body,
  Right,
  Icon,
  Button,
  ListItem,
} from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

const JobsSingle = ({ error, loading, job, reFetch }) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (loading) {
    return <Loading content={loading} />;
  }

  return (
    <Container>
      <Content>
        <MapView
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
        />
        <View
          style={{
            top: -30,
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <View style={{ paddingHorizontal: 16 }}>
            <Item style={{ paddingVertical: 16 }}>
              <H1>{job.title}</H1>
            </Item>
            <Text style={{ paddingTop: 16 }}>{job.description}</Text>
          </View>
          <View style={{ paddingTop: 16 }}>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#FF9501' }}>
                  <Icon active name="wallet" />
                </Button>
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Text>120 pr. time</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#FF9501' }}>
                  <Icon active name="time" />
                </Button>
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Text>15-20</Text>
              </Right>
            </ListItem>
          </View>
        </View>
      </Content>
    </Container>
  );
};

JobsSingle.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  job: PropTypes.shape(),
  reFetch: PropTypes.func,
};

JobsSingle.defaultProps = {
  error: null,
  loading: false,
  job: {},
  reFetch: null,
};

export default JobsSingle;
