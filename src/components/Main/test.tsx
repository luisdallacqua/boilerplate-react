import React from 'react'
import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render header', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Salve Simpatia/i })
    ).toBeInTheDocument()
  })

  it('should render a input', () => {
    render(<Main />)
    expect(screen.getByLabelText(/Jorge/i)).toBeInTheDocument()
  })
})
