import { render, screen } from '@testing-library/react'

import NotFound from '../client/pages/NotFound'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

describe('404 Page', () => {
  it('should dispay elements of 404 page', () => {
    const router = createMemoryRouter([{ path: '*', element: <NotFound /> }])
    render(<RouterProvider router={router} />)

    const heading = screen.getByRole('heading', {
      name: /uh oh! the page you are looking for is not found\./i,
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(
      /uh oh! the page you are looking for is not found/i,
    )
  })
})

describe('404 Page', () => {
  it('should dispay image', () => {
    const router = createMemoryRouter([{ path: '*', element: <NotFound /> }])
    render(<RouterProvider router={router} />)

    const image = screen.getByRole('img', {
      name: /sad face/i,
    })
    expect(image).toBeInTheDocument()
  })
})

describe('404 Page', () => {
  it('should dispay 404 code', () => {
    const router = createMemoryRouter([{ path: '*', element: <NotFound /> }])
    render(<RouterProvider router={router} />)

    const notFound = screen.getByRole('heading', { name: /404/i })
    expect(notFound).toBeInTheDocument()
    expect(notFound).toHaveTextContent(/404/i)
  })
})
