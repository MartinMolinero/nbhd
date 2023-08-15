import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { render, screen, waitFor } from '@testing-library/react'
import AnnouncementsPage from '../page'
import '@testing-library/jest-dom'


const announcements = [
  {
    title: 'QUERETARO',
    content_text: 'lost against x'
  },
  {
    title: 'Guadalajara',
    content_text: 'wins vs y'
  }
]

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({blogs: announcements}),
  })
);

describe('AnnouncementsPage', () => {
  beforeEach(() => {
    fetchMock.doMock()
  })

  it('renders correctly', async() => {  
    await waitFor(render(<AnnouncementsPage />))
    screen.debug()
  })
})