// Must have at least one test file in this directory or Mocha will throw an error.


import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import React from 'react'
import App from './App'

describe('<App /> ', () => {
  it('should render', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains('<div className="root">Test</h1>').length).to.be.true
  })
})
