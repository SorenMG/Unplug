import React from 'react';
import { Container, Text, Left, Header, H1, Button } from 'native-base';
import { FlatList } from 'react-native';
import { Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import { ActionConst, Actions } from 'react-native-router-flux';
import FriendCell from './FriendCell';

const JobPosting = ({ error, loading, listData, reFetch }) => {
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
        renderItem={({ item }) => FriendCell(item)}
      />
      <Button onPress={() => Actions.login({ type: ActionConst.RESET })}>
        <Text>Back</Text>
      </Button>
    </Container>
  );
};

export default JobPosting;
