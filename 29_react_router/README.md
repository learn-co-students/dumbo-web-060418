# Goals
- why we need React Router
- how is it similar to and different from previous routing we've used
- how do we setup React Router
- how do we implement React Router


## Static vs Dynamic Routing
- routing that takes place as your app is rendering, not in a configuration or convention outside of a running app
- almost everything is a component in React Router

## Client-side Routing and SPA
- why do we need routes
  - get information about what client wants
  - structure application
  - RESTful conventions
- drawbacks
  - react routes can be buried in the application

## Router
- used once in top level
- listens for when the route changes, and making that info accessible.

## Route
- conditionally renders a certain component based on string-matching the routes

## Link
- changes the url we see in the browser
- must have a 'to' prop.

## Switch
- picks one of the following routes (the first that matches)
- ignores all routes after first match (like an if/ else if/ else if).

## Redirect
- forces a redirect to a particular route