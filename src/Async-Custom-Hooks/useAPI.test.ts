import { renderHook, act } from '@testing-library/react-hooks'
import { useAPI } from './useAPI'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api', (_req, res, ctx) => {
    return res(ctx.json({ name: 'Andy' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Should fetch', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI())

  await waitForNextUpdate()

  expect(result.current).toEqual({ name: 'Andy' })
})
