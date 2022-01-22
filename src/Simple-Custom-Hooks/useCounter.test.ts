import { useCounter } from './useCounter'
import { renderHook, act } from '@testing-library/react-hooks'

test('Should increment', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})
