const lambdaHandler = require('./build/mainFunc.js').lambdaHandler;
const createMockContext = require('aws-lambda-mock-context');

// This file is used for quick testing of the API function, within the IDE.
// It must first be compiled with tsc, then run with node.

const mockContext = createMockContext();

const mockEvent = {
  body: JSON.stringify({
    actor1: 17142,
    actor2: 3063,
    guess: 'actor1',
  }),
};

// const mockEvent = {
//   body: JSON.stringify({
//     actor1: null,
//     actor2: null,
//     guess: null,
//   }),
// };

async function testLambdaHandler() {
  try {
    const result = await lambdaHandler(mockEvent, mockContext);
    console.log('🧪 ✅ RESULT:');
    console.log(result);

    if (result.statusCode === 200 && result.body) {
      mockContext.succeed(result);
    } else {
      mockContext.fail(new Error('Invalid result'));
    }
  } catch (err) {
    console.log('🧪 🚨 ERROR:');
    console.error(err);
    mockContext.fail(err);
  }
}

testLambdaHandler();
