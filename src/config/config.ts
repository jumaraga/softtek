export default ()     => ({
   swapiHost: process.env.SWAPI_HOST,
   dynamodb: {
      tableName: process.env.DYNAMO_FILMS_TABLE,
   }

});