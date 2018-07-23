# Objectives

- Get a list of search engines from an API
  - `.THEN` put them on the page
- Post new search engines to the API
  - `.THEN` put them on the page

## To get the local API working!

Run these commands in the terminal:

```
npm install -g json-server
json-server --watch db.json
```

Now, you should visit `http://localhost:3000/engines` in your browser and you should have full REST for the `engines` resource.
