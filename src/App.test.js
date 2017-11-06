import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('should render label', () => {
  const wrapper = shallow(
      <h1>Hello Jest!</h1>
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(
      <h1>Hello Jest!</h1>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
