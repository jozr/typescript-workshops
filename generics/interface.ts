// Generics are really useful for defining complex object/interface types
// Let's take the following example

const httpResponse1 = {
  code: 200,
  body: {
    data: 'hello world'
  }
}

// This can be easily typed as:

interface HTTPResponse {
  code: number;
  body: {
    data: string;
  }
}

const httpResponse2: HTTPResponse = {
  code: 200,
  body: {
    data: 'hello world'
  }
}

// Let's say the shape of the object is different when the HTTP response
// is an error

const httpErrorResponse1: HTTPResponse = {
  code: 404,
  body: {
    error: 'Not Found'
  }
}

// HTTPResponse requires the body object to contain a 'data' attribute,
// so the typing fails. We could simply create a specific HTTPErrorResponse
// interface

interface HTTPErrorResponse {
  code: number;
  body: {
    error: string;
  }
}

const httpErrorResponse2: HTTPErrorResponse = {
  code: 404,
  body: {
    error: 'Not Found'
  }
}

// This involves too much type repetition. One way it can be resolved
// is by using generic typing!


























// Let's create a generic interface for an HTTP response object

interface GenericHTTPResponse<T> {
  code: number;
  body: T;
}

// Now let's declare and type the sucessful response

interface SucessfulBody {
  data: string
}

const httpResponse3: GenericHTTPResponse<SucessfulBody> = {
  code: 200,
  body: {
    data: 'hello world'
  }
}

// And for the error response

interface ErrorBody {
  error: string
}

const httpErrorResponse3: GenericHTTPResponse<ErrorBody> = {
  code: 500,
  body: {
    error: 'oops'
  }
}
