import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./styles/styles.css";

/**
 * Root of react site
 *
 * Imports Helmet provider for the page head
 * And App which defines the content and navigation
 */

// Render the site https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(<App />, document.body);