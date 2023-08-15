

import { render, screen } from '@testing-library/react'
import AnnouncementPreview from '..'
import '@testing-library/jest-dom'

describe('AnnouncementPreview', () => {
  it('renders a heading', () => {
    const announcement = {
      title: 'QUERETARO',
      content_text: 'lost against x'
    }
    render(<AnnouncementPreview announcement={announcement} />)
 
    const title = screen.getByText('QUERETARO')
    const content_text = screen.getByText('lost against x')

 
    expect(title).toBeInTheDocument()
    expect(content_text).toBeInTheDocument()
  })
})