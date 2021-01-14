import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import { fetchShow as mockFetchShow} from './api/fetchShow';
jest.mock('./api/fetchShow');

const showData = {
  data: [
    {
      name: 'Stranger Things',
      language: 'English'
    }
  ]
}

test('renders without errors', () => {
  render(<App />)
})