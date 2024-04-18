import { fireEvent, render, screen } from '@testing-library/react'

import Home from '../client/pages/Home'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

describe('Home Page', () => {
  it('should dispay logo with correct src', () => {
    const router = createMemoryRouter([{ path: '*', element: <Home /> }])
    render(<RouterProvider router={router} />)

    const logo = screen.getByRole('img', {
      name: /logo/i,
    }) as HTMLImageElement
    expect(logo).toBeInTheDocument()
    expect(logo.src).toContain('logo')
  })
})

describe('Home Page', () => {
  it('should display greeting message', () => {
    const router = createMemoryRouter([{ path: '*', element: <Home /> }])
    render(<RouterProvider router={router} />)

    const greeting = screen.getByText(/Welcome back User/i)
    expect(greeting).toBeInTheDocument()
  })
})

describe('Home Page', () => {
  it('should display business report title', () => {
    const router = createMemoryRouter([{ path: '*', element: <Home /> }])
    render(<RouterProvider router={router} />)

    const title = screen.getByText(/Company: It's just business/i)
    expect(title).toBeInTheDocument()
  })
})

describe('Home Page', () => {
  it.skip('should display submit button', () => {
    const router = createMemoryRouter([{ path: '*', element: <Home /> }])
    render(<RouterProvider router={router} />)

    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeInTheDocument()
  })
})

describe.skip('Home Page', () => {
  it('should toggle AuthPopup when submit button is clicked', () => {
    const router = createMemoryRouter([{ path: '*', element: <Home /> }])
    render(<RouterProvider router={router} />)

    const submitButton = screen.getByRole('button', { name: /submit/i })
    fireEvent.click(submitButton)

    const authPopup = screen.getByRole('dialog', {
      name: /authentication popup/i,
    })
    expect(authPopup).toBeInTheDocument()

    // Clicking submit button again should close the AuthPopup
    fireEvent.click(submitButton)
    expect(authPopup).not.toBeInTheDocument()
  })
})

//TODO give home page submit button better name
