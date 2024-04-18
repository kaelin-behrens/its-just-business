import { render, screen } from '@testing-library/react'

import NotFound from '../client/pages/NotFound'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

describe('404 Page', () => {
  it('should dispay elements of 404 page', () => {
    const router = createMemoryRouter([{ path: '*', element: <NotFound /> }])
    render(<RouterProvider router={router} />)

    const heading = screen.getByRole('heading', {
      name: /404/i,
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/404/i)
  })
})

describe('404 Page', () => {
  it('should dispay image', () => {
    const router = createMemoryRouter([{ path: '*', element: <NotFound /> }])
    render(<RouterProvider router={router} />)

    const image = screen.getByRole('img', {
      name: /Back to home/i,
    })
    expect(image).toBeInTheDocument()
  })
})
