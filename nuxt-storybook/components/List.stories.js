import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import List from './List'
storiesOf('List', module)
  .add('As a component', () => '<List />')
  .add('I don\'t work', () => '<List />')