# AXIOS WITH REACT

Even though browsers already have a built-in `fetch` API for making HTTP requests, many developers prefer using `axios` due to its additional features and ease of use. `axios` is a popular JavaScript library that simplifies the process of making HTTP requests and handling responses.

So, After that totally not AI generated intro, let's dive into how to use `axios` in your projects.

I used `axios` already in this article series to only fetch data from an API, but `axios` can do much more than that.

So, with that said, I'm `Md. Rishat Talukder` and let's get started.

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_react)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

# Setup

Like all the other parts create a new react app and then install `axios` using npm or yarn.

```bash
npm create vite@latest
cd your-project-name
npm install axios
```

> That's it!

Now let's talk about requests.

# Requests

In a web application there are several parts it can be divided into. Like the `frontend` and the `backend`. The `frontend` is what the user sees and interacts with, while the `backend` is where all the data and logic are handled.

`React` is a `frontend` library, so it doesn't have built-in capabilities to handle `database` operations or `server-side` logic. So, we need to have backend or `API` to interact with.

We can do it the vanilla `fetch` api, but `axios` makes it easier and more efficient.

In the backend, we have several types of requests that we can make to interact with the data. The most common ones are:

- `GET`: To retrieve data from the server.
- `POST`: To send new data to the server.
- `PUT`: To update existing data on the server.
- `DELETE`: To remove data from the server.

These are the basic `CRUD` operations that we can perform on data.

We have already seen how to make a `GET` request using `axios` in the previous articles. Now, let's see how to make the other types of requests.

But still here is a simple example of a `GET` request using `axios`.


# GET Request Example

Make a new react app and clean it up.

Than install `axios`.

I named my app `axios_examples`.

Now, open the `main.jsx` file and clean it up.
```jsx
//src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

Now, open the `App.jsx` file and clean it up.
```jsx
//src/App.jsx
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        AXIOS
      </h1>
    </>
  );
}

export default App;
```

Now, open the terminal and run the app.

```bash
npm run dev
```

Now, make a new folder named `Request` inside the `src` folder.

Then, make a new file named `GetRequest.jsx` inside the `GetRequest` folder.

This Component will fetch data from an API and display it.

```jsx
//src/Request/GetRequest.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function GetRequest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GetRequest;

```

Now, import and use the `GetRequest` component inside the `App.jsx` file.

```jsx
//src/App.jsx
import GetRequest from "./GetRequest/GetRequest";
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        AXIOS
      </h1>
      <GetRequest />
    </>
  );
}   
export default App;
```

Now, save all the files and go to the browser.

You should see a list of posts fetched from the API.

That's just it for this part.

# POST, PUT, DELETE Request Example

## POST Request

`Post` request is used to tell the server to create a new resource in the database.

With `axios`, it's almost the same as a `GET` request, but instead of `axios.get()`, we use `axios.post()`.

And inside the `post()` method, we pass the URL and the data we want to send to the server.

Which than the server will process and create a new resource in the database.

Let's see an example of a `POST` request using `axios`.

Make a new file named `PostRequest.jsx` inside the `src` folder.

```jsx
//src/Request/PostRequest.jsx
import { useState } from "react";
import axios from "axios";

function PostRequest() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
export default PostRequest;
```
> Just created a form to take input from the user and send a `POST` request to the API when the form is submitted.

As we are using the same `jsonplaceholder` API, it won't actually create a new post in the database, but it will return a response with the data we sent.

Also, this is a demo API for practicing `CRUD` operations.

So, when we submit the form, we will see the response below the form.

Now, import and use the `PostRequest` component inside the `App.jsx` file.

```jsx
//src/App.jsx
import GetRequest from "./GetRequest/GetRequest";
import PostRequest from "./PostRequest/PostRequest";
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        AXIOS
      </h1>
      <GetRequest />
      <PostRequest />
    </>
  );
}
export default App;
```

And that's it for the `POST` request.

Before going to the `PUT` and `DELETE` requests, I want to mention that sometimes for any kind of request, we need to send some additional information to the server to authenticate the request or to find specific resources.

These additional information are sent in the form of `headers`.

We can send `headers` in `axios` by passing an object as the third argument to the request method.

For example, in a `POST` request, we can send `headers` like this:

```jsx
const res = await axios.post(
  "https://jsonplaceholder.typicode.com/posts",
  {
    title,
    body,
    userId: 1,
  },
  {
    headers: {
      "Content-Type": "application/json",
    }
  }
);
```

Don't get confused with the `Content-Type` header, it's just an example. You can send any headers you want.

Headers depends on the API you are using or the server you are interacting with.

These are just metadata about the request.

There can be several headers like `Authorization`, `Accept`, `User-Agent` etc. Which just carry additional information about the request.

- `Authorization`: To send authentication credentials for confidential resources.
- `Accept`: To specify the media types that are acceptable for the response.
- `User-Agent`: To identify the client software making the request.

When I start with `django` we will create these headers to authenticate the requests.

Now, let's see how to make a `PUT` request using `axios`.


## PUT Request

`PUT` request is used to update an existing resource in the database.

Absolutely similar to the `POST` request, but instead of `axios.post()`, we use `axios.put()`.


And inside the `put()` method, we pass the URL of the resource we want to update and the data we want to update.

Let's see an example of a `PUT` request using `axios`.

Make a new file named `PutRequest.jsx` inside the `src` folder.

```jsx
//src/Request/PutRequest.jsx
import { useState } from "react";
import axios from "axios";  

function PutRequest() {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title,
          body,
          userId: 1,
        }
      );
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <h2>Update a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post ID:</label>
          <input
            type="number"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
export default PutRequest;
```

> As we can change a single post, we need to take the `postId` as input from the user to identify which post to update and then the new `title` and `body` to update the post.

Now, import and use the `PutRequest` component inside the `App.jsx` file.

```jsx
//src/App.jsx
import GetRequest from "./GetRequest/GetRequest";
import PostRequest from "./PostRequest/PostRequest";
import PutRequest from "./PutRequest/PutRequest";
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        AXIOS
      </h1>
      <PutRequest />
    </>
  );
}
export default App;
```