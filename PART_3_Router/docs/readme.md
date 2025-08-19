# REACT ROUTING

This has been a very fruitful journey into the world of `React`. We have learned the fundamentals and also explored the advanced concepts of `React`. 

But those were all for a `single page application`. And react is a library that is used to build `single page applications` because it is actually only using the `main.html/index.html` file to render the entire application.

But we might want to build a `multi-page application`.

This is where `React Router` comes into play. React has no built-in routing system, so we need to use a library to handle routing in our application.

So, let's get started with `React Router`.

I'm `Md. Rishat Talukder`, your trusted instructor, and a unemployed software developer and I'm definitely not a frontend developer. But you guys are still watching me/ reading my articles, so I must be doing something right. Here's my credentials:

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_react)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

Let's do this boi!!!!

# React Router

`React Router` is a third-party library that seamlessly integrates with React to provide a powerful routing solution. It allows you to create dynamic routes, nested routes, and even lazy load components for better performance.

Now, what am I refering to when I say "routing"?

When a website is loaded in a browser, it typically has a single HTML file which is downloaded from the server. 

Now, the where do find the server? The server is the computer that hosts the website. When you type a `URL` in the browser, it sends a request to the server to fetch the HTML file.

We can say the `URL` is the address is the `route` to the HTML file. 

When we start a `react` application, we have a single HTML file that which needs to be loaded in the browser. The browser has only one way to load the HTML file, which is by using the `URL` of the file.

So, that's why we need a `development server` to serve the HTML file in the localhost. 

And using that localhost, our pc becomes the server and the HTML file is served to the browser through the `URL`.

I hope you guys are getting the point.

Now, when we have multiple pages or components in our application, we need a way to navigate between them. React gives us a lot of flexibility to create components and render them in the browser but we always have to start from the front page which is the `index.html/main.html` file.

So, what we can do is, assign different `URLs` to different components and then use those `URLs` to navigate between the components.

How, do we do that?

we use `/` after the main `URL` to create a new route. For example, if we have a component called `About`, we can create a route for it like this:

```
http://localhost:3000/about
```

Now, we can attach the `About` component to this route and when we navigate to this route, the `About` component will be rendered in the browser.

If we didn't have a routing system, we would have to create a new HTML file for each component and link them together using anchor tags. This is not efficient and not the way we want to build our applications.

So, to create this routing system, we need to use a library called `React Router`.

So, how do we install `React Router`?

## Installation

First, we need a react application. If you don't have one, you can create a new one using `vite` or `create-react-app`.

```bash
npm create vite@latest
```

Enter the project name and select `react` as the framework and fill the other options as you like.

I named my project `react_router`.

Then, navigate to the project directory:

```bash
cd react_router
```

And now we can install the dependencies along with `React Router`:

```bash
npm i react-router
```

> according to the official documentation.

And we are ready to use `React Router` in our application.

> I the recent update `react-router-dom` has been merged into `react-router`, so we don't need to install it separately.


## Setting up the Application

After cleaning the boilerplate code, let's create a simple application.

In the `react_router/src` directory, create a new folder named `components` and inside that folder, create three files: `Home.jsx`, `About.jsx`, and `Contact.jsx`.

```js {.line-numbers} 
// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};
export default Home;
```

```js {.line-numbers}
// src/components/About.jsx
import React from 'react';
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page!</p>
    </div>
  );
};
export default About;
```

```js {.line-numbers}
// src/components/Contact.jsx
import React from 'react';
const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
        <p>This is the Contact Page!</p>    
    </div>
  );
};
export default Contact;
```
Now, we have three components: `Home`, `About`, and `Contact`.

Now, what I want to do is add there links in the `app.jsx` file for each component. When I click the links it'll only render that component.

Which is achievable using `useState` hook. We need to make state variable for each component as boolean and then it's just the toggle the state variable when the link is clicked. When one link is clicked, the other two will be set to false and the clicked one will be set to true.

And it'll be a hassle to do that for each component and also it is not ideal for a large application.

So, we will use `React Router` to handle the routing for us.

This will set unique `URLs` for each component and when we are in that URL, the corresponding component will be rendered.

So, let's add three links in the `App.jsx` file.

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";

function App() {
  return (
    <>
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default App;

```

> Here I have used the `href` attribute to link to the components. And when if you start the development server and open it in the browser you should see three links. And if you click any of them the url on top of the browser changes to the `href` given for this link.

If you click in the `home` link the url should be `localhost:3000/home`, and if you click the `about` link the url should be `localhost:3000/about`, and if you click the `contact` link the url should be `localhost:3000/contact`.


Now, using the react router we can set which component will render when the url changes to the corresponding `href`.

So, how do we do that?

In react-router, there are some built in Component style components that we can use to handle routing. The main component is `BrowserRouter`, which is used to wrap the entire application. Inside the `BrowserRouter`, we can use the `Routes` and `Route` components to define the routes for our application.

So, let's import the necessary components from `react-router` and wrap our application with `BrowserRouter`.

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
function App() {

  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

> Here, we wrap the whole application with `BrowserRouter` and then we define the routes section using the `Routes` component. Inside the `Routes`, we define each route using the `Route` component. The `path` prop is used to define the URL for the route and the `element` prop is used to specify which component should be rendered when that URL is accessed.

This can look a bit confusing at first, but the main thing is we need to wrap our whole application with `BrowserRouter` like we did with `global context` in the previous section.

So, it's a good practice to wrap the `BrowserRouter` in the `main.jsx` file where we render the `App` component and then we can remove the `BrowserRouter` from the `App.jsx` file.

```js {.line-numbers}
// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
function App() {
  return (
    <>
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
```

Now, when you start the development server and open it in the browser, you should see the three links. When you click on any of them, the corresponding component will be rendered.

Which is great! We don't need extensive logic to handle the routing. The `react-router` library takes care of that for us.

But there is a problem. When we click on the links, the page `reloads`. Which is not what we want. I mean we are making a `single page application` here, so we don't want the page to reload when we navigate between the components.

This is happening because we are using the `href` attribute in the anchor tags. It's the default behavior of the browser to reload the page when we click on a link with an `href` attribute.

That's why react router provides a special component called `Link` which we can use instead of the anchor tag. The `Link` component will handle the navigation without reloading the page.

So, let's import the `Link` component from `react-router` and use it instead of the anchor tags.

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link> 
        </li>
      </ul>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
} 
export default App;
```

> In the Link component, we use the `to` prop instead of the `href` prop. The `to` prop is used to specify the URL for the route. When we click on the link, it will navigate to the specified URL without reloading the page.

This is great! And now, we can make multiple pages in our application without reloading the page.

Here's a little task for you:
- Modify the code to set the `Home` component as the default component when the application loads. 

I think you can figure that out by yourself.

## Error 

Sometimes the user might enter a wrong `path` in the URL. For example, if the user enters `localhost:3000/unknown`, the application will not be able to find the corresponding route but there will be no error message or anything(just a warning in the console).

So, what we can do is, add a `404` page to handle the unknown routes.

```js {.line-numbers}
// src/components/NotFound.jsx 
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
export default NotFound;
```

We can add this component in the `components` folder. And then we can add a route for this component in the `App.jsx` file.

```js {.line-numbers}
// src/App.jsx  
import { useState } from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link> 
        </li>
      </ul>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* This will catch all unknown routes */}
      </Routes>
    </>
  );
}
export default App;
```
> Here, we have added a new route with the path `*` which will catch all unknown routes and render the `NotFound` component. This way, if the user enters an unknown route, they will see a 404 error page.

