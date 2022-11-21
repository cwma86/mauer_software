

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
     headers: {
         "Access-Control-Allow-Origin" : "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        title: JSON.stringify('My first post'),
        contents: JSON.stringify('Here are the contents from my first post'),
    };
};
