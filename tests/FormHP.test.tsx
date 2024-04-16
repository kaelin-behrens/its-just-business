import { fireEvent, render, screen } from '@testing-library/react'

import Home from '../client/pages/Home'
import FormHP from '../client/components/FormHP'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

describe('FormHP Component', () => {
  it('should display form elements when initially rendered', () => {
    render(<FormHP clues={['', 'fragment']} />)

    const quarterSelect = screen.getByLabelText(/financial quarter/i)
    expect(quarterSelect).toBeInTheDocument()

    const executiveSummaryInput = screen.getByDisplayValue(/executive summary/i)
    expect(executiveSummaryInput).toBeInTheDocument()

    const reportTextArea = screen.getByDisplayValue(/robust sales growth/i)
    expect(reportTextArea).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('should display captcha check after form submission', () => {
    render(<FormHP clues={['', 'fragment']} />)

    const submitButton = screen.getByTestId(/formBtn/i)
    fireEvent.click(submitButton)

    const captchaCheck = screen.getByText(/Please verify you are human./i)
    expect(captchaCheck).toBeInTheDocument()
  })

  it('should display captcha puzzle after form submission', () => {
    render(<FormHP clues={['', 'fragment']} />)
    const submitButton = screen.getByTestId(/formBtn/i)
    fireEvent.click(submitButton)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    // const puzzle = screen.findAllByRole('CaptchaImage')
    // expect(puzzle).toBeInTheDocument()
  })

  it.skip('should display password clue after completing captcha', () => {
    render(<FormHP clues={['', 'fragment']} />)

    const submitButton = screen.getByTestId(/formBtn/i)
    fireEvent.click(submitButton)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    const captchaBtn = screen.getByTestId(/captchaBtn/i)
    fireEvent.click(captchaBtn)

    const passwordClue = screen.getByText(/password clue/i)
    expect(passwordClue).toBeInTheDocument()
  })
})

//Todo -have a look how to trgger checkbox or migrate some tets to the captchaImage render
