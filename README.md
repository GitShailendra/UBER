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

## Get User Profile

### Description
This API endpoint allows an authenticated user to retrieve their profile information.

### Endpoint
`GET /get-profile`

### Request Headers
The request must include the authentication token in the `Authorization` header or as a cookie.

#### Example Request Headers
```
Authorization: Bearer <token>
```

### Response
The response will be a JSON object containing the user's profile information.

#### Example Response
```json
{
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com"
}
```

### Status Codes
- `200 OK`: The user's profile information was successfully retrieved.
- `401 Unauthorized`: The user is not authenticated.

### Method
`GET`

## User Logout

### Description
This API endpoint allows an authenticated user to log out by invalidating their authentication token.

### Endpoint
`GET /logout`

### Request Headers
The request must include the authentication token in the `Authorization` header or as a cookie.

#### Example Request Headers
```
Authorization: Bearer <token>
```

### Response
The response will be a JSON object containing a message indicating that the user was successfully logged out.

#### Example Response
```json
{
    "message": "logged out successfully"
}
```

### Status Codes
- `200 OK`: The user was successfully logged out.
- `401 Unauthorized`: The user is not authenticated.

### Method
`GET`

# Captain API Documentation

## Captain Creation

### Description
This API endpoint allows for the creation of a new captain. The captain must provide a first name, last name, email, password, and vehicle details. The password will be hashed before being stored in the database.

### Endpoint
`POST /captain/register`

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname.firstName` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastName` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 8 characters long.
- `vehicle.color` (string, required): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number, required): The capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of 'car', 'bike', or 'auto'.

#### Example Request
```json
{
    "fullname": {
        "firstName": "Jane",
        "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Response
The response will be a JSON object containing the following fields:
- `token` (string): The authentication token for the captain.
- `captain` (object): The captain object containing the captain's details.

#### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "60d0fe4f5311236168a109cb",
        "fullname": {
            "firstName": "Jane",
            "lastName": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

### Status Codes
- `201 Created`: The captain was successfully created.
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
            "msg": "Name must be at least",
            "param": "fullname.firstName",
            "location": "body"
        },
        {
            "msg": "Please enter a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 char long",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Vehicle color should be at least 3 char long",
            "param": "vehicle.color",
            "location": "body"
        },
        {
            "msg": "Vehicle plate should be at least 3 char long",
            "param": "vehicle.plate",
            "location": "body"
        },
        {
            "msg": "Vehicle capacity should be at least 1",
            "param": "vehicle.capacity",
            "location": "body"
        },
        {
            "msg": "Invalid type",
            "param": "vehicle.vehicleType",
            "location": "body"
        }
    ]
}
```

## Captain Login

### Description
This API endpoint allows an existing captain to log in by providing their email and password. If the credentials are valid, an authentication token is returned.

### Endpoint
`POST /captain/login`

### Request Body
The request body must be a JSON object containing the following fields:
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 8 characters long.

#### Example Request
```json
{
    "email": "jane.doe@example.com",
    "password": "password123"
}
```

### Response
The response will be a JSON object containing the following fields:
- `token` (string): The authentication token for the captain.
- `captain` (object): The captain object containing the captain's details.

#### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "60d0fe4f5311236168a109cb",
        "fullname": {
            "firstName": "Jane",
            "lastName": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

### Status Codes
- `200 OK`: The captain was successfully logged in.
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
            "msg": "Please enter a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least",
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

## Get Captain Profile

### Description
This API endpoint allows an authenticated captain to retrieve their profile information.

### Endpoint
`GET /captain/get-profile`

### Request Headers
The request must include the authentication token in the `Authorization` header or as a cookie.

#### Example Request Headers
```
Authorization: Bearer <token>
```

### Response
The response will be a JSON object containing the captain's profile information.

#### Example Response
```json
{
    "_id": "60d0fe4f5311236168a109cb",
    "fullname": {
        "firstName": "Jane",
        "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Status Codes
- `200 OK`: The captain's profile information was successfully retrieved.
- `401 Unauthorized`: The captain is not authenticated.

### Method
`GET`

## Captain Logout

### Description
This API endpoint allows an authenticated captain to log out by invalidating their authentication token.

### Endpoint
`GET /captain/logout`

### Request Headers
The request must include the authentication token in the `Authorization` header or as a cookie.

#### Example Request Headers
```
Authorization: Bearer <token>
```

### Response
The response will be a JSON object containing a message indicating that the captain was successfully logged out.

#### Example Response
```json
{
    "message": "logged out successfully"
}
```

### Status Codes
- `200 OK`: The captain was successfully logged out.
- `401 Unauthorized`: The captain is not authenticated.

### Method
`GET`
