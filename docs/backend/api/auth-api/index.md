---
layout: doc
---


# Authorization API

## User

| Field name                 | Type                                       | Description                                                                    |
|:---------------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| ```id```                   | number<b style="color:red">*</b>           | The unique ID of the user                                                      |
| ```username```             | RoleEnum<b style="color:red">*</b>         |                                                                                |
| ```email```                | string<b style="color:red">*</b>           | Email of the user to whom the account is registered.                           |
| ```role```                 | string<b style="color:red">*</b>           | The role of the user reflects the level of access to change the content.       |         
| ```is_active```            | boolean<b style="color:red">*</b>          | Flag indicating whether the user has confirmed his email                       |

::: details User details
```
{
    "username": "string",
    "email": "user@example.com",
    "id": number,
    "is_active": boolean,
    "role": "admin" | "moderator" | "viewer"
}
```
:::

## Authorizatrion response

| Field name                 | Type                                       | Description                                                                    |
|:---------------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| ```user```                 | User<b style="color:red">*</b>             | The unique ID of the user                                                      |
| ```access_token```         | string<b style="color:red">*</b>           | A unique access token issued to the user                                       |
| ```refresh_token```        | string<b style="color:red">*</b>           | Email of the user to whom the account is registered.                           |

::: details User details
```
{
  "access_token": "string",
  "refresh_token": "string",
  "user": {
    "username": "string",
    "email": "user@example.com",
    "id": number,
    "is_active": boolean,
    "role": "admin" | "moderator" | "viewer"
  }
}
```
:::
