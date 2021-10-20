import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './index';

Enzyme.configure({adapter: new Adapter()});
describe('Dashboard Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.exists()).toBe(true);
  });
});
