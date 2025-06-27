# Campus Hiring Evaluation - Full Stack

## Terms & Conditions

This document and the associated assessment contain confidential and proprietary information of Afford Medical Technologies Private Limited ("**Affordmed**"). By accessing this material or participating in this assessment, you acknowledge receipt of this information for the sole purpose of evaluating your candidacy for an internship, contract, or employment with Affordmed. You hereby agree to the following:

- **Confidentiality**: You shall maintain the strict confidentiality of all information received and refrain from sharing, distributing, or disclosing any part of the information to any third party.

- **Non-Tampering**: You shall not tamper with, disrupt, or attempt to compromise any Affordmed or its vendor's cloud or software resources provided for this assessment.

- **Sole Use**: You shall use this material solely for the purpose stated herein and for no other purpose whatsoever.

Any unauthorised use, disclosure, or tampering will result in immediate disqualification from the candidacy process and may subject you to legal action. You consent to the exclusive jurisdiction of the Courts of Hyderabad/Secunderabad for any legal disputes arising from this agreement. Any reference to third parties within this document is purely coincidental and for illustrative purposes only, and does not constitute any endorsement or affiliation.

## Deliverables & Evaluation Considerations

**Time Limit**: 3 Hours (No extra time for pushing to GitHub)

**Code Implementation**: Deliver a fully functional microservice and a responsive React frontend web application that adhere to all specified API and frontend requirements and general constraints, demonstrating robust error handling, high code quality, and efficient API/UI design suitable for a production environment.

---

## Develop a HTTP URL Shortener Microservice

Ensure you've followed the instructions and registered provided in the [Campus Hiring Evaluation - Pre-Test Setup](./Pre-Test-Setup.md) document before starting.

Your task is to develop a robust HTTP URL Shortener Microservice that provides core URL shortening functionality along with basic analytical capabilities for the shortened links.

### Requirements & Constraints

- **Mandatory Logging Integration**: Your app **MUST** extensively use the Logging Middleware you created in the Pre-Test Setup stage. Use of inbuilt language loggers or console logging is not allowed.

- **Microservice Architecture**: Implement a single microservice capable of handling the specified API endpoints.

- **Authentication**: For the purpose of this evaluation, assume users accessing your APIs are pre-authorized. Your application must not require user registration or login mechanisms for API access.

- **Short Link Uniqueness**: All generated short links must be globally unique.

- **Default Validity**: If a user does not specify a validity period for a shortened URL, it must default to 30 minutes. Validity input from the user will always be provided as an integer representing minutes.

- **Custom Shortcodes**: Users may optionally provide a custom shortcode of their choice. If a shortcode is provided, your service must attempt to use it, ensuring it is unique and valid (e.g., alphanumeric, reasonable length). If no shortcode is provided, your service must automatically generate a unique shortcode.

- **Redirection**: When a user accesses a shortened URL (e.g., `http://hostname:port/abcd1`), the service must redirect them to the original long URL.

- **Error Handling**: Implement robust error handling. Your API endpoints should return appropriate HTTP status codes and descriptive JSON response bodies for invalid requests (e.g., malformed input, non-existent shortcode, shortcode collision, expired link).

### API Endpoints Specification

Your microservice must expose the following RESTful API endpoints:

#### Create Short URL

- **Description**: Creates a new shortened URL.
- **Method**: POST
- **Route**: `http://hostname:port/shorturls`

**Request Body**:
```json
{
  "url": "https://very-very-very-long-and-descriptive-subdomain-that-goes-on-and-on.somedomain.com/additional/directory/levels/for/more/length/really-log-sub-domain/a-really-log-page",
  "validity": 30,
  "shortcode": "abcd1"
}
```

**Parameters**:
- `url` (string, required): The original long URL to be shortened. Must be a valid URL format.
- `validity` (integer, optional): The duration in minutes for which the short link remains valid. Defaults to 30 minutes if omitted.
- `shortcode` (string, optional): A desired custom shortcode. If omitted or unavailable, a unique shortcode must be generated.

**Expected Response (Status Code: 201)**:
```json
{
  "shortLink": "https://hostname:port/abcd1",
  "expiry": "2025-01-01T00:30:00Z"
}
```

**Response Parameters**:
- `shortLink`: The complete shortened URL.
- `expiry`: The ISO 8601 formatted timestamp indicating when the short link expires.

#### Retrieve Short URL Statistics

- **Description**: Retrieves usage statistics for a specific shortened URL.
- **Method**: GET
- **Route**: `http://hostname:port/shorturls/:abcd1`

**Response**: The response must be a JSON object containing statistics related to the specified shortcode, including:
- The total number of times the short link has been clicked.
- Information about the original URL it points to, its creation date, and its expiry date.
- Detailed click data for each interaction, which should include the timestamp of the click, the source from which the click originated (e.g., referrer), and a coarse-grained geographical location of the click.

---

## Develop a React URL Shortener Web App

Develop a responsive React frontend web application that integrates with the backend microservice to provide a user interface for URL shortening and analytics.

### Requirements & Constraints

- **Mandatory Logging Integration**: Your app **MUST** extensively use the Logging Middleware you created in the Pre-Test Setup stage. Use of inbuilt language loggers or console logging is not allowed.

- **Running Environment**: Your React application must run exclusively on `http://localhost:3000`.

- **Integration**: Your React application must be integrated with the backend APIs developed as part of this evaluation. The React application must not implement the URL shortening logic or the statistics aggregation itself; it should solely consume the backend APIs for these functionalities.

- **User Experience**: Care must be taken to avoid cluttering the page. The UI must prioritize user experience, with a focus on highlighting key elements of each page.

- **Styling Framework**: Use Material UI only. If you are not familiar with Material UI, employ native CSS. Use of ShadCN or other CSS Libraries is prohibited. Solely relying on native CSS or not using Material UI will result in lower scores.

### Application Pages

Your application should consist of the following pages:

#### URL Shortener Page

**Functionality**: This page should allow users to shorten up to 5 URLs concurrently. For each URL, the user should be able to provide:
- The original long URL
- An optional validity period (in minutes)
- An optional preferred shortcode

**Client-Side Validation**: Prior to making API calls to the backend, the user's inputs should be validated client-side based on the constraints already specified in the "General Requirements & Constraints" section (e.g., valid URL format, validity as an integer).

**Display Results**: Upon successful creation of shortened URLs, the application must display the shortened links along with their respective expiry dates, clearly associated with each original URL provided by the user.

#### URL Shortener Statistics Page

**Functionality**: This page should display a list of all shortened URLs created (either in the current session or historically if data persistence is implemented and accessible). For each listed shortened URL, it should clearly present:

- The shortened URL itself and its creation and expiry date times
- The total number of times the short link has been clicked
- Detailed click data, including:
  - The timestamp of each click
  - The source from which the click originated
  - The geographical location of the click

### Technical Requirements

- **Framework**: Use React or Next.js (TypeScript preferred)
- **Styling**: Material UI or Vanilla CSS only
- **Responsive Design**: Must work on both mobile and desktop views
- **Error Handling**: Implement proper error handling for API failures
- **Loading States**: Show appropriate loading indicators during API calls
- **Form Validation**: Client-side validation before API calls

### Evaluation Criteria

- **Functionality**: All specified features work correctly
- **Code Quality**: Clean, readable, and well-structured code
- **User Experience**: Intuitive and responsive interface
- **Integration**: Proper integration with backend APIs
- **Error Handling**: Robust error handling and user feedback
- **Logging Integration**: Extensive use of custom logging middleware
- **Design**: Professional appearance using Material UI or CSS

### Submission Requirements

1. **Repository Structure**: Create separate folders for backend and frontend
2. **Documentation**: Include setup and running instructions
3. **API Documentation**: Document all API endpoints
4. **Screenshots**: Include screenshots of both mobile and desktop views
5. **Testing**: Provide evidence of testing (screenshots from Postman/Insomnia for APIs)

### Important Notes

- **No External Algorithm Libraries**: For Backend Track, select any Backend Framework without utilising external libraries for algorithms
- **API Testing**: Capture output screenshots from API clients like Insomnia or Postman, displaying request body, response and response time for the average calculator problem
- **Production-Grade Code**: Follow production-grade coding standards with proper naming conventions, folder structure, and code comments
- **Regular Commits**: Commit and push your code to GitHub regularly at logical milestones
- **Time Management**: 3 hours total - plan your time accordingly between backend and frontend development 