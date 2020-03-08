# Simple HTTP Endpoint Example
This example contains a single REST endpoint that greets users in a different language each time it's accessed. It can speak a few different languages. The HTTP endpoint is exposed as /greeting.

## Service Information

    service: MoneyCatcha API
    stage: prod
    region: us-east-2

    api keys: None
    
    endpoints: GET - https://dnnadl5oaf.execute-api.us-east-2.amazonaws.com/prod/greeting
  
    functions: arn:aws:lambda:us-east-2:760740477526:function:greeter
  
## Usage

You may hit the endpoint directly from a browser or a REST client like Postman
or send an HTTP request to the endpoint using a tool like curl.

curl https://dnnadl5oaf.execute-api.us-east-2.amazonaws.com/prod/greeting
