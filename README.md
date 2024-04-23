# CUSTOMERS MICROSERVICE REST API

[![Test amd Deploy](https://github.com/raferdev/express_microservice/actions/workflows/deploy.yml/badge.svg)](https://github.com/raferdev/express_microservice/actions/workflows/deploy.yml)

This is a microservice builded with serverless framework.

AWS Deploy endpoint: https://xczqbua6pk.execute-api.us-east-1.amazonaws.com/production/v1/customers (💸)

This project contains:

- CI/CD : Using Github Actions to automate tests with Jest and deploy serverless insfrastructure on AWS cloud

- Logs/Metrics/Control : Environment instrumentalized with open-telemetry Node, Express, and Winston, being captured by AWS observability.

- Architecture: Built across Express routes, middlewares, controllers, and services, it can handle and control all endpoints using AWS Lambda and persist on DynamoDB.

- Linting: Eslint with flat config, prettier, lint-staged with husly.

Table of Content:

- 1.0 - [Installation](#install)
- 2.0 - [Running](#run)
- 2.1 - [Tests](#run-tests)
- 3.0 - [API REST](#api-rest)

## [Install](#install)

    pnpm install

## [Run the app](#run)

serverless offline

## [Run the tests](#run-tests)

    pnpm test

# [REST API](#api-rest)

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /v1/customers`

    curl -i -X GET'Accept: application/json' http://localhost:3000/v1/customers

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new customer

### Request

`PUT /v1/customers`

    curl -i -X PUT 'Accept: application/json' -d 'name=Foo&email=new@new&phone=+553488383584&addess=exemple' http://localhost:3000/v1/customers

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    { "customersID":$UUID,
      "name":"Foo",
      "email":"new@new",
      "phone":"+553488383584",
      "address":"exemple city"}

## Get a specific customer

### Request

`GET /v1/customers/:customerID`

    curl -i -H 'Accept: application/json' http://localhost:3000/v1/customers/:customerID

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

{ "customerID":$UUID,
"name":"Foo",
"email":"new@new",
"phone":"+553488383584",
"address":"exemple city"}

## Delete customer

### Request

`DELETE /v1/customers/:customersID`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/9999

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Search by text

### Request

`GET /v1/search`

    curl -i -H 'Accept: application/json' -d 'name=Bar&junk=rubbish' http://localhost:3000/v1/search?text=exemple%text

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    [{ "customerID":$UUID,

        "name":"Foo",
        "email":"new@new",
        "phone":"+553488383584",
        "address":"exemple city"},... ]
