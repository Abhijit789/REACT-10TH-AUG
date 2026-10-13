
import axios from "axios";

// Base URL of your backend server.
// All API requests made through this Axios instance use this URL.
const BASE_URL = "http://localhost:7000/";

// Create a custom Axios instance.
// This lets us configure common settings for all API requests.
const API = axios.create({
  // The base URL is automatically prefixed to relative request URLs.
  // Example: API.get("/users") -> http://localhost:7000/users
  baseURL: BASE_URL,

  // Default headers sent with requests.
  headers: {
    // Indicates that the request body contains JSON data.
    "Content-Type": "application/json"
  },

  // Maximum time to wait for a response before Axios aborts the request.
  // 4000 milliseconds = 4 seconds.
  timeout: 4000
});

// =====================================================
// REQUEST INTERCEPTOR
// =====================================================

// Runs before every request made through the API instance.
// Useful for adding access tokens, logging, or modifying headers.
API.interceptors.request.use(
  (config) => {
    // "config" contains the outgoing request configuration.
    // It includes URL, method, headers, params, data, and other settings.

    // Read the access token if your application stores one.
    // Replace this example with your actual authentication mechanism.
    const token = localStorage.getItem("accessToken");

    // Attach the token only when one exists.
    if (token) {
      // Authorization tells the backend which user/session is making
      // the request. "Bearer" is the standard token scheme.
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Return the modified config.
    // Axios needs this object to continue sending the request.
    return config;
  },

  (error) => {
    // Handles errors that occur while preparing the request.
    // For example, an error in request configuration.
    return Promise.reject(error);
  }
);

// =====================================================
// RESPONSE INTERCEPTOR
// =====================================================

// Runs when a response is received, or when a request fails.
// Useful for extracting response data and handling common errors.
API.interceptors.response.use(
  (response) => {
    // "response" is the complete Axios response object.
    // It includes data, status, headers, config, and request details.

    // Return only the response body.
    // Example: API.get("/users") resolves directly to the users data.
    return response.data;
  },

  (error) => {
    // Runs when Axios treats the request as failed.
    // This includes HTTP errors, network errors, and timeouts.

    if (error.response) {
      // The server responded with a non-success HTTP status.
      // Examples: 400, 401, 403, 404, 500.
      const status = error.response.status;

      if (status === 401) {
        // 401 means authentication is missing or invalid.
        // Your app can handle token refresh or redirect to login here.
        console.error("Unauthorized: Please log in again.");
      } else if (status === 403) {
        // 403 means the server understood the request
        // but refused access to the requested resource.
        console.error("Forbidden: You do not have permission.");
      } else if (status >= 500) {
        // 5xx status codes indicate a server-side error.
        console.error("Server error. Please try again later.");
      } else {
        // Other HTTP errors, such as 400 or 404.
        console.error("API error:", error.response.data);
      }
    } else if (error.request) {
      // A request was sent, but no response was received.
      // Possible reasons: server is down, network issue, or timeout.
      console.error("No response received from the server.");
    } else {
      // The request could not be configured or started properly.
      console.error("Request setup error:", error.message);
    }

    // Keep the error rejected so the calling component can catch it.
    // Without this, callers could mistakenly treat the failure as success.
    return Promise.reject(error);
  }
);

// Export the configured instance for use throughout the application.
export default API;
