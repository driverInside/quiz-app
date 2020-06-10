# Quiz App with Express

## Run the server

1 Navigate to `server` folder and install dependencies:

```bash
cd server && npm install
```

2 Run `dev` script

```bash
npm run dev
```

## Api Routes

The API routes are defined in the `index.js` script. There are only two endpoints:

```javascript
app.get('/questions', (req, res) => {
  // ...
})

app.post('/answer', (req, res) => {
  // ...
})
```

The first one fetch all the array of `questions`. The last one return `true` if an answer is rigth or `false` if not.

## Using the API

To retrieve all the questions you can use the following command:


```bash
curl -H "Content-Type: application/json" http://localhost:4000/questions
```

To send and answer, you can use:

```bash
curl -H "Content-Type: application/json" http://localhost:4000/answer -X POST -d '{ "id": 2, "answer": "a" }'
```

