export default ()     => ({
   swapiHost: process.env.SWAPI_HOST,
   dynamodb: {
      character: process.env.DYNAMO_FILMS_TABLE,
   }

});
