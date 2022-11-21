/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const AWS = require('aws-sdk');
 const docClient = new AWS.DynamoDB.DocumentClient();
 
 const params = {
   TableName : 'blogposts-dev',
   /* Item properties will depend on your application concerns */
   Key: {
     id: '1'
   }
 }
 
 async function getItem(){
   try {
     const data = await docClient.get(params).promise()
     return data
   } catch (err) {
     return err
   }
 }
 
 exports.handler = async (event, context) => {
   try {
     const data = await getItem()
     return { body: JSON.stringify(data) }
   } catch (err) {
     return { error: err }
   }
 }
