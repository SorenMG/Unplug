import React from 'react';
import { ListItem, Thumbnail, Body, Right, Container, Text, Left, Header, H1 } from 'native-base';
import { FlatList } from 'react-native';
import { Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import { Actions } from 'react-native-router-flux';
import JobCell from './JobCell';

const JobPosting = ({ error, loading, listData }) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (listData.length < 1) {
    return <Error content={errorMessages.articlesEmpty} />;
  }

  return (
    <Container>
      <Header style={{ backgroundColor: 'white', marginHorizontal: 16 }}>
        <Left style={{ marginLeft: -8 }}>
          <H1 style={{ fontWeight: 'bold' }}>Friend Requests</H1>
        </Left>
      </Header>
      <FlatList
        onScroll={(event) => {
          console.log(event);
        }}
        data={listData}
        refreshing={loading}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => JobCell(item.from)}
      />
    </Container>
  );
};

export default JobPosting;
