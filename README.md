# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections within asynchronous operations.  The code simulates an HTTP server with an asynchronous task that can fail.  The initial version lacks proper error handling, leading to potential crashes or incomplete error responses.  The solution demonstrates best practices for handling these rejections.

## Bug

The `bug.js` file contains the problematic code.  The asynchronous operation (`asyncOperation`) might reject with an error.  However, there's no comprehensive error handling to gracefully manage this failure. This results in an unhandled promise rejection which the Node.js process might not handle effectively, causing issues.

## Solution

The `bugSolution.js` file provides a corrected version.  It uses a `try...catch` block to handle potential errors during the asynchronous operation and provides more robust error handling and feedback to the client.  Unhandled promise rejections are avoided through comprehensive error handling.