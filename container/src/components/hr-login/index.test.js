import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HRLogin from './index';

Enzyme.configure({adapter: new Adapter()});
describe('HRLogin Component', () => {
  it('renders', () => {
    const wrapper = shallow(<HRLogin />);
    expect(wrapper.exists()).toBe(true);
  });
});
