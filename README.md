# usePopcorn Movie Search App

## Overview

The usePopcorn Movie Search App is a React application that allows users to search for movies using the OMDB API. Users can view movie details, add movies to their watched list, and rate movies. This project showcases various key React concepts, including state management, useEffect hook, useRef hook, conditional rendering, event handling, and fetching data from an API.

## Components

### 1. `App`

- The main component responsible for rendering the entire application.
- Manages the state of query, movies, watched list, isLoading, error, and selected movie using the `useState` hook.
- Uses the `useEffect` hook for fetching movies from the OMDB API and storing watched movies in local storage.
- Includes sub-components such as `NavBar`, `Loader`, `ErrorMessage`, `Main`, `Box`, `MovieList`, `MovieDetails`, `WatchedSummary`, and `WatchedMovieList`.

### 2. `NavBar`

- Displays the logo, search input, and number of results.

### 3. `Loader`

- Renders a loading message while fetching data.

### 4. `ErrorMessage`

- Renders an error message if there is an error fetching movies.

### 5. `Main`

- Renders the main content of the application, including the list of movies and movie details.

### 6. `Box`

- Renders a collapsible box for displaying movie lists and details.

### 7. `MovieList`

- Renders a list of movies fetched from the API.

### 8. `MovieDetails`

- Renders details of a selected movie, including its poster, rating, plot, and other information.
- Allows users to add the movie to their watched list and rate the movie.

### 9. `WatchedSummary`

- Displays summary statistics of the watched list, including the number of movies watched, average IMDb rating, average user rating, and average runtime.

### 10. `WatchedMovieList`

- Renders a list of watched movies.

## Usage

1. Open the app in your browser.
2. Search for movies using the search input.
3. View movie details by clicking on a movie.
4. Add movies to your watched list and rate them.
5. View summary statistics of your watched list.

## Running the Application

To run the application, include the `App` component in your project. Make sure to manage the styles and dependencies as needed.

