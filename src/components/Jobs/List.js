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
        renderItem={({ item }) => (
          <ListItem thumbnail onPress={() => Actions.jobsSingle({ job: item, title: item.title })}>
            <Left>
              <Thumbnail square source={{ uri: item.imageUri }} style={{ borderRadius: 10 }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note>{item.description}</Text>
            </Body>
            <Right>
              <Text note>{item.price}</Text>

              <Text note>pr. time</Text>
            </Right>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default JobPosting;
