import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

import { fetchShow as mockFetchShow} from './api/fetchShow';
jest.mock('./api/fetchShow');

const showData = {
  data: {
    name: 'Stranger Things',
    summary: "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
    _embedded: {
      episodes: [
        {
          "id": 553946,
          "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          "name": "Chapter One: The Vanishing of Will Byers",
          "season": 1,
          "number": 1,
          "type": "regular",
          "airdate": "2016-07-15",
          "airtime": "",
          "airstamp": "2016-07-15T12:00:00+00:00",
          "runtime": 60,
          "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
          },
          "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          "_links": {
            "self": {
              "href": "http://api.tvmaze.com/episodes/553946"
            }
          }
        },
        {
          "id": 578663,
          "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
          "name": "Chapter Two: The Weirdo on Maple Street",
          "season": 1,
          "number": 2,
          "type": "regular",
          "airdate": "2016-07-15",
          "airtime": "",
          "airstamp": "2016-07-15T12:00:00+00:00",
          "runtime": 60,
          "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
          },
          "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
          "_links": {
            "self": {
              "href": "http://api.tvmaze.com/episodes/578663"
            }
          }
        },
      ]
    },
    image: {
      "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    }
  }
}

test('renders without errors', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  await act(() => {render(<App />)
    return Promise.resolve();
  })
})

test('fetches and renders showData', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { rerender } = render(<App />);
  screen.debug();
  await act(async () => {
    await rerender(<App />);
    screen.debug();
  });
  const title = screen.queryAllByTitle('H1');
  
  await waitFor(() => {
    expect(title).toHaveTextContent(/stranger things/i);
  });
});