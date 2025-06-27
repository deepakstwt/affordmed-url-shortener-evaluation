# Pre-Test Setup

## Overview
This document outlines the pre-test setup requirements for the AFFORDMED Campus Hiring Evaluation. You must complete these steps before beginning your assessment.

## Terms & Conditions

By accessing this material or participating in this assessment, you acknowledge receipt of this information for the sole purpose of evaluating your candidacy for an internship, contract, or employment with AFFORDMED. You hereby agree to the following:

- **Confidentiality**: You shall maintain the strict confidentiality of all information received and refrain from sharing, distributing, or disclosing any part of the information to any third party.

- **Non-Tampering**: You shall not tamper with, disrupt, or attempt to compromise any AFFORDMED or its vendor's cloud or software resources provided for this assessment.

- **Sole Use**: You shall use this material solely for the purpose stated herein and for no other purpose whatsoever.

Any unauthorised use, disclosure, or tampering will result in immediate disqualification from the candidacy process and may subject you to legal action.

## Registration

You need to register with the Test Server to obtain your unique **Client ID** and **Client Secret**.

### Requirements

- Your **Roll Number** and **Email** must align with your university/college email and roll number. (Email must support Google Form verified submission)

- The **GitHub Repository link** you submit in the Google Form will be matched against the **GitHub Username** provided during registration. Any mismatch will result in your submission being ignored. If your GitHub Profile link is `https://github.com/username`, submit only `username` while registering.

- The **accessCode** required for registration has been shared via the email you received. Do not use the example accessCode provided in this document.

### Registration API

**Endpoint**: `POST http://20.244.56.144/evaluation-service/register`

**Request Body**:
```json
{
  "email": "ramkrishna@abc.edu",
  "name": "Ram Krishna",
  "mobileNo": "9999999999",
  "githubUsername": "github",
  "rollNo": "aa1bb",
  "accessCode": "xgAsNC"
}
```

### Response

You can register only once. **Do not forget to save your clientID and clientSecret; you cannot retrieve them again.**

**Response**:
```json
{
  "email": "ramkrishna@abc.edu",
  "name": "ram krishna",
  "rollNo": "aa1bb",
  "accessCode": "xgAsNC",
  "clientID": "d9cbb699-6a27-44a5-8d59-8b1befa816da",
  "clientSecret": "tVJaaaRBSeXcRXeM"
}
```

## Authentication

After successful registration, you must obtain an Authorization Token to access the Test Server APIs.

### Authorization Token API

**Endpoint**: `POST http://20.244.56.144/evaluation-service/auth`

**Request Body**:
```json
{
  "email": "ramkrishna@abc.edu",
  "name": "ram krishna",
  "rollNo": "aa1bb",
  "accessCode": "xgAsNC",
  "clientID": "d9cbb699-6a27-44a5-8d59-8b1befa816da",
  "clientSecret": "tVJaaaRBSeXcRXeM"
}
```

### Response (Status Code: 200)

```json
{
  "token_type": "Bearer",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYkBdGFpbXMiOnsiZhXIi...",
  "expires_in": 1743574344
}
```

## Important Notes

- **Save your credentials**: Store your clientID, clientSecret, and access token securely
- **Single registration**: You can only register once, so ensure all details are correct
- **Token expiry**: Note the expiration time of your access token
- **GitHub alignment**: Ensure your GitHub username matches exactly what you provide during registration

## Next Steps

Once you have completed the registration and authentication:

1. Save all your credentials securely
2. Verify your access token works by testing API calls
3. Proceed with the repository setup as outlined in the submission guidelines
4. Begin implementing the required logging middleware

## Support

If you encounter issues during the pre-test setup, ensure you:
- Have used the correct accessCode from your email
- Have provided accurate university email and roll number
- Have matched your GitHub username exactly
- Have not attempted to register multiple times 