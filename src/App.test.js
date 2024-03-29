import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders learn react link', () => {
  const shallowWrapper = shallow(<App/>);
  const appComponent = shallowWrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});
