import React from 'react'
import { render, screen } from '@testing-library/react'
import { Person } from './Person'

test('renders learn react link', () => {
  render(<Person name="Andy" />)
  // const element = screen.getByText('/Name is Andy/i')
  const element = screen.getByRole('contentinfo')
  expect(element).toBeInTheDocument()
  expect(element).toHaveTextContent('Name is Andy')
})
