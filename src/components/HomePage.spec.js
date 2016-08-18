// Must have at least one test file in this directory or Mocha will throw an error.

import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import React from 'react'
import HomePage from './HomePage'

describe('<HomePage /> ', () => {
  it('should render', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('should add', () => {
    expect(1 + 1).to.equal(2)
  })
})
