export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "blogPostsDb": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "SortKeyName": "string",
            "SortKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "blogPosts": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "blogPostsApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}