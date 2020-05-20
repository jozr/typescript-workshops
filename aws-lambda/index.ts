/* eslint-disable @typescript-eslint/camelcase */
// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html

import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda'

export const handler = (event: APIGatewayProxyEvent, _context: Context): APIGatewayProxyResult => {
  const userId = event.pathParameters && event.pathParameters.user_id

  const body = JSON.stringify({
    user: {
      id: userId,
      email: `${userId}@email.com`
    }
  })

  return {
    statusCode: 200,
    body
  }
};
