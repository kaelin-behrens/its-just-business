import { render, screen } from '@testing-library/react'

import TimeUp from '../client/pages/TimeUp'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

describe('Fail Page', () => {
  it('should dispay elements of fail page', () => {
    const router = createMemoryRouter([{ path: '*', element: <TimeUp /> }])
    render(<RouterProvider router={router} />)

    const heading = screen.getByRole('heading', {
      name: /time up\. you failed\./i,
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Time up. You failed./i)
  })
})
