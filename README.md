![HOWTA_logo_readme](https://github.com/curlyfriesplease/actorAgeApi/assets/81927768/1fa097d2-285e-45a7-b573-58985c3d66fa)


# actorAgeGameApi

## Description

The serverless lambda function that serves as the backend for the 'How Old Was That Actor' game

## Overall site setup

The site is made up of these three repos:

![actorAgeDiagram](https://github.com/curlyfriesplease/actorAgeApi/assets/81927768/bfb64f66-5c16-4062-a4c0-def3874c6143)


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
In AWS: Go into the Lambda function > configuration > environment variables > add BEARER_TOKEN

## Update quick guide

Make changes in IDE
Then run these:
npm install
tsc
cp -R node_modules/ build/ {NB this takes a while. If deps have changed this'll need repeating}
cp package.json build/ {Without these two steps, Sam build will not include deps}
sam build
sam package --output-template-file packaged.yaml --s3-bucket actorageapibucket
sam deploy --template-file packaged.yaml --region eu-west-2 --capabilities CAPABILITY_IAM --stack-name actor-age-api-stack
