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
   TableName : 'blogposts'
 }
 
 async function listItems(){
   try {
     const data = await docClient.scan(params).promise()
     return data
   } catch (err) {
     return err
   }
 }

exports.handler = async (event, context) => {
    const data = await listItems()
    console.log(`EVENT: ${JSON.stringify(event)} ${JSON.stringify(data)}`);
    return {
        statusCode: 200,
     headers: {
         "Access-Control-Allow-Origin" : "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(data),
    };
};
