export const createResponse = (statusCode: number, data: any, message: string, db = null) => {
   if (db) db.destroy();
   return {
      statusCode: statusCode,
      headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data, message })
   };
}
