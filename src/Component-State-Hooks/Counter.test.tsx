import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from './Counter'

test('State test', () => {
  render(<Counter />)

  const divElement = screen.getByRole('contentinfo')
  const buttonElement = screen.getByText('Add One')
  fireEvent.click(buttonElement)

  expect(divElement).toHaveTextContent('Counter is 1')
})
