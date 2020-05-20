import {
  APIGatewayProxyEvent,
  APIGatewayEventRequestContextWithAuthorizer,
  APIGatewayEventIdentity,
} from 'aws-lambda'

const apiGatewayEventIdentity: APIGatewayEventIdentity = {
  accessKey: '',
  accountId: '',
  apiKey: '',
  apiKeyId: '',
  caller: '',
  cognitoAuthenticationProvider: '',
  cognitoAuthenticationType: '',
  cognitoIdentityId: '',
  cognitoIdentityPoolId: '',
  principalOrgId: '',
  sourceIp: '',
  user: '',
  userAgent: '',
  userArn: '',
}

const apiGatewayEventRequestContext: APIGatewayEventRequestContextWithAuthorizer<object> = {
  accountId: '',
  apiId: '',
  authorizer: {},
  protocol: '',
  httpMethod: '',
  identity: apiGatewayEventIdentity,
  path: '',
  stage: '',
  requestId: '',
  requestTimeEpoch: 0,
  resourceId: '',
  resourcePath: '',
}

const apiGatewayProxyEvent: APIGatewayProxyEvent = {
  body: null,
  headers: {},
  multiValueHeaders: {},
  httpMethod: '',
  isBase64Encoded: false,
  path: '',
  pathParameters: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  stageVariables: null,
  requestContext: apiGatewayEventRequestContext,
  resource: '',
}

export default apiGatewayProxyEvent
