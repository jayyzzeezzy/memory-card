import { render, screen } from '@testing-library/react';

import App from '../src/App';

// eslint-disable-next-line no-undef
describe('App', () => {
  // eslint-disable-next-line no-undef
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});