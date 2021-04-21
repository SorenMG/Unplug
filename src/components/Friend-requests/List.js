import React from 'react';
import { Container } from 'native-base';
import { FlatList } from 'react-native';
import { Error, Header, Loading } from '../UI';
import { errorMessages } from '../../constants/messages';
import FriendCell from './FriendCell';

const CustomHeader = () => <Header title="Friend Requests" />;

const JobPosting = ({ error, loading, listData, reFetch }) => {
  if (error) {
    return (
      <Container>
        <CustomHeader />
        <Error content={error} tryAgain={reFetch} />
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <CustomHeader />
        <Loading />
      </Container>
    );
  }

  if (listData.length < 1) {
    return (
      <Container>
        <CustomHeader />
        <Error content={errorMessages.articlesEmpty} />
      </Container>
    );
  }
  return (
    <Container>
      <CustomHeader />
      <FlatList
        onScroll={(event) => {
          console.log(event);
        }}
        data={listData}
        refreshing={loading}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => FriendCell(item)}
      />
    </Container>
  );
};

export default JobPosting;
