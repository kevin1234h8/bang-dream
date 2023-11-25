import { BangDreamBand } from "@/type";

export const generateSuccessGetMessage = (
  data: any,
  timestamp = new Date().toISOString()
) => {
  const success = {
    status: "success",
    message: "Data retrieved successfully",
    data: data,
    timestamp: timestamp,
  };

  return JSON.stringify(success);
};

export const generateGetErrorMessage = (
  message: string,
  timestamp = new Date().toISOString()
) => {
  const errorCode = "BD-GET-" + Math.random().toString(36).substring(2, 8);
  const error = {
    status: "error",
    message: message,
    error_code: errorCode, // You can customize the error code as needed
    error_description:
      "The server encountered an issue while processing your request. Please check your request parameters and try again. If the problem persists, contact our support team for assistance.",
    suggested_action:
      "Double-check your request parameters and ensure they meet the API requirements. If the issue persists, contact kevin@gmail.com for further assistance.",
    timestamp: timestamp,
  };

  return JSON.stringify(error);
};

export const generatePostErrorMessage = (
  message: string,
  timestamp = new Date().toISOString()
) => {
  const errorCode = "BD-POST-" + Math.random().toString(36).substring(2, 8);
  const error = {
    status: "error",
    message: message,
    error_code: errorCode, // You can customize the error code as needed
    error_description:
      "The server encountered an issue while processing your request. Please check your request data and try again. If the problem persists, contact our support team for assistance.",
    suggested_action:
      "Double-check your request data and ensure it meets the API requirements. If the issue persists, contact kevin@gmail.com for further assistance.",
    timestamp: timestamp,
  };

  return JSON.stringify(error);
};

export const generatePostSuccessMessage = (
  message: string,
  timestamp = new Date().toISOString()
) => {
  const success = {
    status: "success",
    message: message,
    timestamp: timestamp,
  };

  return JSON.stringify(success);
};
