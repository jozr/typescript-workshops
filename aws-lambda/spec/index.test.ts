import { handler } from '../index'
import mockEvent from './fixtures/event'
import mockContext from './fixtures/context'

it("returns expected response", async () => {
  const result = await handler(mockEvent, mockContext)

  expect(result).toEqual(null)
})
