import React from 'react'
import Card from './Card'

export default {
  title: 'Component/Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const WithoutAuthor = Template.bind({})
WithoutAuthor.args = {
  text: 'This is my text',
  title: 'Title!',
  author: '',
  backgroundColor: 'green',
}

export const WithAuthor = Template.bind({})
WithAuthor.args = {
  text: 'This is my text',
  title: 'Title!',
  author: 'Jone Doe',
}
