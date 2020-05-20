import { handler } from '../index'
import mockEvent from './fixtures/event'
import mockContext from './fixtures/context'

it("returns expected response", () => {
  expect(handler(mockEvent, mockContext)).toEqual(null)
})
