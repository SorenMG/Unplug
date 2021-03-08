import React from 'react';
import { ListItem, Thumbnail, Body, Right, Container, Text, Left } from 'native-base';
import { FlatList } from 'react-native';
import { Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import { Actions } from 'react-native-router-flux';

const JobPosting = ({ error, loading, listData }) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (listData.length < 1) {
    return <Error content={errorMessages.articlesEmpty} />;
  }
  return (
    <Container>
      <FlatList
        data={listData}
        refreshing={loading}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          JobCell(item, () => Actions.jobsSingle({ id: item.id, title: item.title }))
        }
      />
    </Container>
  );
};

export default JobPosting;
