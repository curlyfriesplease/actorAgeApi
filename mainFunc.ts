import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    let eventBody;
    if (event.body) {
        eventBody = JSON.parse(event.body as string);
    } else {
        eventBody = JSON.parse("NO EVENT BODY!!!" as string);
    }

    return {
    statusCode: 200,
    body: JSON.stringify({
      message: eventBody,
      statusCode: 200,
      input: event,   // event is the input to the lambda function
    }),
  };
}