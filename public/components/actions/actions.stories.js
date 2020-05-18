import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Actions from './index';

const stories = storiesOf('Actions', module)

stories.add('Actions component', () => (
  <Actions
    getRepos={actions('onClick')}
    getStarred={actions('onClick')}
  />
))