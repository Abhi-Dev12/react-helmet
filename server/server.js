import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "../src/App";

// Create Express app
const app = express();

// Define a route to handle SSR
app.get("/*", (req, res) => {
  const helmetContext = {};

  // Render the app using SSR
  const appString = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  // Get helmet data for head tags
  const { helmet } = helmetContext;

  // Send the response with SSR and injected helmet head tags
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/main.js"></script> <!-- Add your bundled JS here -->
      </body>
    </html>
  `);
});

// Start the server on port 3002
app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
