export default () => ({
   swapiHost: process.env.SWAPI_HOST,
   dynamodb: {
      character: process.env.DYNAMO_FILMS_TABLE,
      user: process.env.DYNAMO_USER_TABLE,
   },
   cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID,
      userPoolClient: process.env.COGNITO_USER_POOL_CLIENT,
   },
   email: {
      user:process.env.EMAIL_USER,
      port:process.env.EMAIL_PORT,
      password:process.env.EMAIL_PASS,
      host:process.env.EMAIL_HOST,
   }

});
