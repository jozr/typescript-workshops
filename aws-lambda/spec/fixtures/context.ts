import { Context } from 'aws-lambda';

const context: Context = {
  callbackWaitsForEmptyEventLoop: true,
  functionName: '',
  functionVersion: '',
  invokedFunctionArn: '',
  memoryLimitInMB: '',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  getRemainingTimeInMillis: () => 1,
  done: () => console.log,
  fail: () => console.log,
  succeed: () => console.log,
}

export default context
