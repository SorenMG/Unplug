import React from 'react';
import {
  List,
  ListItem,
  Thumbnail,
  Body,
  Right,
  Container,
  Content,
  Text,
  Left,
} from 'native-base';
import { FlatList } from 'react-native';
import { Error } from '../UI';
import { errorMessages } from '../../constants/messages';

const JobPosting = ({ listData }) => {
  if (listData.length < 1) {
    return <Error content={errorMessages.articlesEmpty} />;
  }
  console.log(listData);
  return (
    <Container>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem thumbnail>
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
