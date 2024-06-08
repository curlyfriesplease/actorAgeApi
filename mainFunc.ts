import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getTwoRandomActors } from './functions/getTwoRandomActors';
import getTwoSpecificActors from './functions/getTwoSpecificActors';

export const lambdaHandler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log('⚙️ Received event:', JSON.stringify(event, null, 2));

  let returnBody;
  if (event.body) {
    const body = event.body as unknown as { actor1?: any; actor2?: any };
    if (body.actor1 && body.actor2) {
      console.log('⚙️ two actor IDs specified, fetching specific actors...');
      returnBody = await getTwoSpecificActors(body.actor1, body.actor2);
    } else {
      console.log('⚙️ no actor IDs specified, fetching two random actors...');
      returnBody = await getTwoRandomActors();
    }
  } else {
    console.log('🚨 NO EVENT BODY');
    returnBody = JSON.parse('No event body received by the API' as string);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: returnBody,
        statusCode: 400,
        input: event,
      }),
    };
  }

  console.log('⚙️ Returning:', returnBody);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: returnBody,
      input: event,
    }),
  };
};
