import React from 'react';
import App from '../../../client/src/index.jsx';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Components render on App', () => {
  test('RelatedItems appears on App', () => {
    let wrapper = shallow(<App/>)
    expect(wrapper.toContainReact(<RelatedItems/>))
  })
})