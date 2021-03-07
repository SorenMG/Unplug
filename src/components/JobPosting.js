import React from 'react';
import {
  List,
  ListItem,
  Thumbnail,
  Grid,
  Row,
  Col,
  Container,
  Content,
  Text,
  H1,
  H2,
  H3,
} from 'native-base';
import Spacer from './UI/Spacer';

const About = () => (
  <Container>
    <Content>
      <List>
        <ListItem>
          <Thumbnail
            square
            source={{ uri: 'https://wallpaperaccess.com/full/1595904.jpg' }}
            style={{ marginRight: 16, borderRadius: 10 }}
          />
          <Grid>
            <Col>
              <Row>
                <H3>Test</H3>
              </Row>
              <Row>
                <Text style={{ color: 'grey' }}>Description</Text>
              </Row>
            </Col>
            <Col style={{ alignItems: 'flex-end' }}>
              <Row>
                <H3 style={{ color: 'grey' }}>120</H3>
              </Row>
              <Row>
                <Text style={{ color: 'grey' }}>pr. time</Text>
              </Row>
            </Col>
          </Grid>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default About;
