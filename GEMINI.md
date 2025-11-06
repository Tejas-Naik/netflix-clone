
# Project Overview

This project is a Netflix clone built with React. It fetches movie data from The Movie Database (TMDb) API and displays it in a user interface that resembles Netflix.

**Key Technologies:**

*   **React:** The core of the application is built with React, a popular JavaScript library for building user interfaces.
*   **Axios:** Used for making HTTP requests to the TMDb API to fetch movie data.
*   **movie-trailer:** A library to find movie trailers on YouTube.
*   **react-youtube:** A React component for embedding YouTube videos.

**Architecture:**

The application is structured into several components:

*   **`App.js`:** The main component that renders all other components.
*   **`Navbar.jsx`:** The navigation bar at the top of the page.
*   **`Banner.jsx`:** The main banner at the top of the page that displays a random movie from the Netflix Originals collection.
*   **`Row.jsx`:** A component that displays a row of movies for a specific category (e.g., "Top Rated", "Action Movies").

# Building and Running

To build and run the project, you can use the following commands:

*   **`npm install`:** Installs all the dependencies.
*   **`npm start`:** Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
*   **`npm test`:** Launches the test runner in interactive watch mode.
*   **`npm run build`:** Builds the app for production to the `build` folder.

# Development Conventions

*   **Coding Style:** The project follows the standard React coding style.
*   **Testing:** The project uses the default Create React App testing setup with Jest and React Testing Library.
*   **Contribution:** There are no explicit contribution guidelines, but the code is well-structured and easy to understand.
