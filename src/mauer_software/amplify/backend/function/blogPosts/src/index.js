/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_BLOGPOSTSDB_ARN
	STORAGE_BLOGPOSTSDB_NAME
	STORAGE_BLOGPOSTSDB_STREAMARN
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const postId = event.pathParameters.postId;
    const blogPost = {'blogTitle' : 'first post', 
                      'blogContents': 'This is my first blog post ' + postId}
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(blogPost),
    };
};
