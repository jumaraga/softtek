export default () => ({
   swapiHost: process.env.SWAPI_HOST,
   dynamodb: {
      character: process.env.DYNAMO_FILMS_TABLE,
      user: process.env.DYNAMO_USER_TABLE,
   },
   cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID,
      userPoolClient: process.env.COGNITO_USER_POOL_CLIENT,
   }

});
