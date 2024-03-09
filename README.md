# actorAgeGameApi

## Description

The serverless lambda function that serves as the backend for the 'How Old Was That Actor' game

## Setup

This was setup following this tutorial
https://apoorv487.medium.com/serverless-rest-api-on-aws-with-lambda-and-api-gateway-using-sam-serverless-application-model-4aa3b550be1d

In the template setup and deployment commands I have changed the following names:
DemoGetUserIdApi = ActorAgeApi
DemoGetDetailsFunction = ActorAgeGetDetailsFunction
demo-get-details/ = actor-age-api/
sam-demo-stack = actor-age-api-stack
sam-demo-cloudformation = actorageapibucket

## Adding API keys

A TMDB API key is required.
https://www.themoviedb.org/settings/api
once you've created an account, you can get your key here.

Locally: Create a .env file in the root of your project and add your API key and bearer token:
API_KEY=your_api_key
BEARER_TOKEN=your_bearer_token
In AWS: tbc

## Update quick guide

Make changes in IDE
Then run these:
npm run build
sam build
sam package --output-template-file packaged.yaml --s3-bucket actorageapibucket
sam deploy --template-file packaged.yaml --region eu-west-2 --capabilities CAPABILITY_IAM --stack-name actor-age-api-stack
