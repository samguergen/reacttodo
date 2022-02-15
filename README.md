# Goldbelly
## URL Shortener

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple Frontend app, written in React, that allows a user to input a url and generates for her a shortened version, using Goldbelly's existing API library.


Past urls are listed in a list below, and user can delete any of them if he wished. She can also enter a custom slug, that will be used when generating a shortened URL.

The app uses React-Bootstrap to help with styling and grid layout.

## Things I would add if I had more time

1) Sanitizing user input, such as trimming extra spaces
2) Validation for user input, to make sure that they are in proper url format
(eg: http://www.EXAMPLE.com)
3) Validation for unique slugs, since they also serve as id for React keye elements
4) Add navigation and routing, to place input and url lists on different pages, for cleaning layout



## Running project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Tests

 The tests are kind of broken, as I did not have enough time to write them, but to run them you should do

### `npm test`
