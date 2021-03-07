import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';

import { JobPosting, JobSingle } from '../containers';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs key="tabbar" swipeEnabled type="replace" showLabel={false} {...DefaultProps.tabProps}>
        <Stack
          key="jobpostings"
          title="Job Postings"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="jobPostings" component={JobPosting} />
          <Scene key="jobsSingle" component={JobSingle} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
