# User API Documentation

## User Creation

### Description
This API endpoint allows for the creation of a new user. The user must provide a first name, last name, email, and password. The password will be hashed before being stored in the database.

### Endpoint
`POST /register`

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname.firstName` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastName` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 5 characters long.

#### Example Request
```json
{
    "fullname": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Response
The response will be a JSON object containing the following fields:
- `token` (string): The authentication token for the user.
- `user` (object): The user object containing the user's details.

#### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

### Status Codes
- `201 Created`: The user was successfully created.
- `400 Bad Request`: The request was invalid. This can occur if required fields are missing or if validation fails.

### Method
`POST`

### Error Handling
If the request is invalid, the response will contain a JSON object with an `errors` field detailing the validation errors.

#### Example Error Response
```json
{
    "message": "Invalid request",
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 5 chars long",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Firstname must be at least of 3 characters",
            "param": "fullname.firstName",
            "location": "body"
        }
    ]
}
```

## User Login

### Description
This API endpoint allows an existing user to log in by providing their email and password. If the credentials are valid, an authentication token is returned.

### Endpoint
`POST /login`

### Request Body
The request body must be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 5 characters long.

#### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Response
The response will be a JSON object containing the following fields:
- `token` (string): The authentication token for the user.
- `user` (object): The user object containing the user's details.

#### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

### Status Codes
- `200 OK`: The user was successfully logged in.
- `400 Bad Request`: The request was invalid. This can occur if required fields are missing or if validation fails.
- `401 Unauthorized`: The email or password is incorrect.

### Method
`POST`

### Error Handling
If the request is invalid, the response will contain a JSON object with an `errors` field detailing the validation errors.

#### Example Error Response
```json
{
    "message": "Invalid request",
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 5 chars long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

If the email or password is incorrect, the response will contain a JSON object with a `message` field.

#### Example Error Response
```json
{
    "message": "Invalid email or password"
}
```
