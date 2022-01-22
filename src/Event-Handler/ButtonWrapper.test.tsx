import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonWrapper } from './ButtonWrapper'

test('Handles onClick', () => {
  const onClick = jest.fn()

  render(<ButtonWrapper title="Add Item" onClick={onClick} />)
  const element = screen.getByText('Add Item')
  expect(element).toBeInTheDocument()

  fireEvent.click(element)
  expect(onClick).toBeCalledTimes(1)
})
