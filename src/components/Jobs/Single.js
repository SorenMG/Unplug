import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  H1,
  Text,
  View,
  Item,
  Left,
  Body,
  Right,
  Icon,
  Button,
  H3,
  ListItem,
  Footer,
} from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapViewDirections from 'react-native-maps-directions';
import Constants from 'expo-constants';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCAdZ4mP1LWq9tGE598Boy_mE7CphK6wt0';
const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };

const JobsSingle = ({ error, loading, job, reFetch, ...props }) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (loading) {
    return <Loading content={loading} />;
  }

  console.log(GOOGLE_MAPS_APIKEY);

  return (
    <Container>
      <Content>
        <MapView
          showsUserLocation
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView>
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
            <Item style={{ paddingVertical: 16 }}>
              <Left>
                <H3 style={{ fontSize: 16, fontWeight: 'bold' }}>Description</H3>
                <Text>{job.description}</Text>
              </Left>
            </Item>
          </View>
          <Item style={{ padding: 16, justifyContent: 'space-around' }}>
            <Button style={{ backgroundColor: 'black', width: 55, height: 55, borderRadius: 50 }}>
              <Icon active name="call" />
            </Button>
            <Button style={{ backgroundColor: 'black', width: 55, height: 55, borderRadius: 50 }}>
              <Icon active name="ios-chatboxes" />
            </Button>
            <Button style={{ backgroundColor: 'black', width: 55, height: 55, borderRadius: 50 }}>
              <Icon active name="md-locate" />
            </Button>
          </Item>
          <View style={{ paddingTop: 16 }}>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#000000' }}>
                  <Icon active name="wallet" />
                </Button>
              </Left>
              <Body>
                <Text>Hourly pay</Text>
              </Body>
              <Right>
                <Text>120 pr. time</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#000000' }}>
                  <Icon active name="time" />
                </Button>
              </Left>
              <Body>
                <Text>Time</Text>
              </Body>
              <Right>
                <Text>15-20</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#000000' }}>
                  <Icon active name="md-locate" />
                </Button>
              </Left>
              <Body>
                <Text>Address</Text>
              </Body>
              <Right>
                <Text>Nellikevej 10B, 8240 Risskov</Text>
              </Right>
            </ListItem>
            <ListItem icon last>
              <Left>
                <Button style={{ backgroundColor: '#000000' }}>
                  <Icon active name="briefcase" />
                </Button>
              </Left>
              <Body>
                <Text>Task</Text>
              </Body>
              <Right>
                <Text>Productionworker</Text>
              </Right>
            </ListItem>
          </View>
        </View>
      </Content>
      <Footer>
        <Button
          rounded
          dark
          style={{
            margin: 8,
            marginHorizontal: 32,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            Sign up
          </Text>
        </Button>
      </Footer>
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
