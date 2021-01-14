import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

import { fetchShow as mockFetchShow} from './api/fetchShow';
jest.mock('./api/fetchShow');

const showData = {
  data: [
    {
      name: 'Stranger Things',
      summary: "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl."
    }
  ]
}

test('renders without errors', () => {
  render(<App />)
})

test('fetches and renders showData', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { rerender } = render(<App />);
  screen.debug();
  await act(async () => {
    rerender(<App />);
    screen.debug();
  });
  const title = screen.getByRole('h1');
  
  await waitFor(() => {
    expect(title).toHaveTextContent(/stranger things/i);
  });
});