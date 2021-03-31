import { handler } from '../index'
import mockEvent from './fixtures/event'
import mockContext from './fixtures/context'

it("returns expected response", async () => {
  const expectedResponse = {
    "statusCode": 200,
    "body": "{\"user\":{\"id\":\"abc123\",\"email\":\"abc123@email.com\"}}"
  }

  const event = {
    ...mockEvent,
    "pathParameters": {
      ...mockEvent.pathParameters,
      "user_id": "abc123"
    }
  }

  const result = await handler(event, mockContext)

  expect(result).toEqual(expectedResponse)
})
