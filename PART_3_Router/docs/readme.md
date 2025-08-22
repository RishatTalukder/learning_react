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
import React from "react";

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
import React from "react";
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
import React from "react";
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
import React from "react";

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

Now, this will cause another issue, When we are adding the `NotFound` component, we are actually "any route not included in the `Routes` will be caught by the `NotFound` component. So, inside the `routes` we don't have a route for the `localhost:3000/` path, which is the default path when the application loads. So, if we try to access the `localhost:3000/` path, it will also be caught by the `NotFound` component.

So, we should add a route for the `localhost:3000/` path as well. We can do that by adding a route with the path `/` and rendering the `Home` component.

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link> 
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} 
export default App;
```

> `/` is the default path when the application loads, so we have added a route for it and rendered the `Home` component. Now, when the user accesses the `localhost:3000/` path, they will see the `Home` component.


## Nested Routes

Sometimes, we might want to have nested routes in our application. For example, we might want to have a `Profile` page with sub-routes like `Settings`, `Posts`, etc.

Nested routing can be a little hard to get your head around and it's going to be a little tricky for me to explain too.

First let's see an example of how to create nested routes.

Let's create a new component called `Profile.jsx` in the `components` folder.

```js {.line-numbers}
// src/components/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to the Profile Page!</p>
    </div>
  );
};
export default Profile;
```

Quick and easy. Now I want this component to be part of the `About` page. So, when the user clicks on the `About` link, I'll add a link in the `About` component to navigate to the `Profile` page.

```js {.line-numbers}
// src/components/About.jsx
import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page!</p>
      <Link to="profile">Profile</Link> {/* Link to the Profile page */}
    </div>
  );
};
export default About;
```

Now, we need to add a route for the `Profile` component in the `App.jsx` file. But this time, we will make it a nested route under the `About` route.

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile"; // Import the Profile component
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="profile" element={<Profile />} />{" "}
          {/* Nested route for Profile */}
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
```

Now that we have added the nested route for the `Profile` component, we need to make sure that the `About` component can render the nested routes.


By adding the new route inside the `About` route, we are telling the `react-router` that the `Profile` component is a child of the `About` component.

So, it's will configure the path to be `localhost:3000/about/profile` for the `Profile` component.

And the link tag will also be `to="profile"` which will navigate to the `Profile` component when clicked.

So, now, if we open the application in the browser and click on the `About` link, we will see the `About` component with a link to the `Profile` component. When we click on the `Profile` link, it will navigate to the `Profile` component without reloading the page.

Buuuut, the issue is the profile component is not being rendered when we navigate to the `Profile` page. This is a common issue when dealing with nested routes in `react-router`.

When you are using react router, you need to render the nested routes inside the parent component. And to do so we cannot just import and use the `Profile` component directly in the `About` component. Instead, we need to use the `Outlet` component from `react-router` to render the nested routes.

It's like telling the `react-router` that we will render a component here but not right now. And when the nested route is accessed, it will render the component in the place of the `Outlet` component.

```js {.line-numbers}
// src/components/About.jsx
import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page!</p>
      <Link to="profile">Profile</Link> {/* Link to the Profile page */}
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};
export default About;
```

Now, when we navigate to the `Profile` page, the `Profile` component will be rendered inside the `About` component where the `Outlet` component is placed.

We can place the `Outlet` component anywhere in the parent component where we want the nested route to be rendered. It can be at the end of the component or in the middle, it doesn't matter.

I hope you understand how nested routes work in `react-router`. It's a powerful feature that allows us to create complex routing structures in our application.

Now, time for more confusing stuff.

# Shared Layouts

This is one of those things that won't make much sense at first, and you really need to practice before getting the hang of it.

When I used the `outlet` component in the `About` component, it rendered the `Profile` component inside the `About` component. And actually that is a shared layout.

Let me explain.

Shared layouts are a way to share a common layout between multiple routes. For example, when we go to any website that website has a common header and footer that is rendered always no matter which `endpoint/route` we are on. This is a shared layout.

So, let's try to make a shared layout for our application.

If we take a good look in the `App.jsx` file, we can see that we have a common header which is the `ul` element with the links to the different routes. This has no route and it is always rendered no matter which route we are on. Which is not ideal for a website.

So, we can make a new component called `navbar.jsx` and move the `ul` element with the links to that component. And then we can render that component in the `App.jsx` file.

```js {.line-numbers}
// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router";  

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Navbar;
```

Now, what we can do is, import this component in the `App.jsx` file and render it at the `/` level. This way, the `Navbar` component will be rendered on every route and we can navigate to different routes using the links in the `Navbar`.

Than what we can do is, nest the `Routes` component inside the `Navbar` component. This way, the `Navbar` will be rendered on every route and we can navigate to different routes using the links in the `Navbar`. But as we learned before, when we nest the `Routes` component, we need to use the `Outlet` component to render the nested routes.

So, our modified `App.jsx` file will look like this:

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="profile" element={<Profile />} />{/* Nested route for Profile */}
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
```

```js {.line-numbers}
// src/components/Navbar.jsx
import React from "react";
import { Link, Outlet } from "react-router";  

const Navbar = () => {
  return (
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

      <Outlet /> {/* This will render the nested routes */}
    </ul>
  );
};
export default Navbar;
```

Now, when we navigate to any route, the `Navbar` component will be rendered and we can navigate to different routes using the links in the `Navbar`. And the nested routes will be rendered inside the `Navbar` component where the `Outlet` component is placed.

## Index Route

Now, that we have a shared layout, we can see that the `Home` component is not being rendered when we navigate to the root path `/`. This is because we have not defined a route for the root path in the `App.jsx` file.

But we cannot just add a route for the root path and render the `Home` component because that will cause the `Navbar` component to be rendered twice. Once at the root path and once inside the `Navbar` component.

So, what we can do is, use the `index` prop in the `Route` component to define the index route for the shared layout. The index route is a special route that is rendered when the parent route is accessed without any sub-route.

This will surely surely surely cause some confusion and also place the `Home` component in the `Navbar` component because the home components route will also be set to `/`.

We just have to change the route for the `Home` component to be an index route.

```js {.line-numbers}
// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} /> {/* Index route for Home component */}
          <Route path="about" element={<About />}>
            <Route path="profile" element={<Profile />} />{/* Nested route for Profile */}
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
```

```js {.line-numbers}
// src/components/Navbar.jsx
import React from "react";
import { Link, Outlet } from "react-router";  

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link> {/* Link to the Home page */}
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>

      <Outlet />
    </ul>
  );
};
export default Navbar;
```

Now, when we navigate to the root path `/`, the `Home` component will be rendered inside the `Navbar` component and the `Navbar` component will be rendered on every route.

And we have a very basic routing system in our application.

Now, let's make this a real navbar using `bootstrap`.

## Stylling the Navbar

To make the navbar look better, we can use `bootstrap` to style it. First, we need to install `bootstrap` in our project.

```bash
npm i bootstrap bootswatch
```

> I'll use a `bootswatch` theme for the navbar. You can choose any theme you like from the [bootswatch](https://bootswatch.com/) website.

We will add the stylling in the `main.jsx` file. We can import the `bootstrap` CSS file and the `bootswatch` theme CSS file in the `main.jsx` file.

```js {.line-numbers}
// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "bootswatch/dist/darkly/bootstrap.min.css"; // Import Bootswatch theme CSS
import "bootswatch/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

And we can style the `Navbar` component using the `bootstrap` classes.

```js {.line-numbers}
// src/components/Navbar.jsx
import React from "react";
import { Link, Outlet } from "react-router"; // Use react-router-dom

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4"      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyApp
          </Link>
          <div className=" navbar-collapse">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

```

And this will give a nice shared navbar for our application. The `navbar` will be rendered on every route and we can navigate to different routes using the links in the `Navbar`.

# Code Splitting

Code splitting is a powerful feature in `React` that allows us to split our code into smaller chunks and load them on demand. This can significantly improve the performance of our application by reducing the initial load time.

In `React Router`, we can use the `lazy` and `Suspense` components to achieve code splitting. The `lazy` function allows us to dynamically import a component, and the `Suspense` component allows us to show a fallback UI while the component is being loaded.

When a website loads it's actually downloading the entire codebase of the application Which is the `JavaScript` code that is written in the `src` folder. This can be a problem if the application is large and has many components because it will take a long time to load the entire codebase.

And as we are using `react-router` to handle routing, not every component will be used at the same time. So, we can split the code into smaller chunks and load them on demand when the user navigates to that route.

Let's see how we can implement code splitting in our application.

First, we need to import the `lazy` and `Suspense` components from `react`. Then, we can use the `lazy` function to dynamically import our components.

```js {.line-numbers}
// src/App.jsx
import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contacts"));
const Profile = lazy(() => import("./components/Profile"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          >
            <Route
              path="profile"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
```

> Here, we have used the `lazy` function to dynamically import our components. The `lazy` function takes a function that returns a promise that resolves to the component. This way, the component will be loaded only when it is needed.

And we have wrapped the components in the `Suspense` component with a fallback UI that will be shown while the component is being loaded. In this case, we are showing a simple "Loading..." message.

# Dynamic Routing

Now, as we know how to create routes and nested routes, we can also create dynamic routes in our application. 

What is dynamic routing?

Whne we create a route that route can hove some items/components that are simillar but not the same. Like, products in a e-commerce website. We can see all the products in a single page but when we click on a product, we are taken to a new page that shows the details of that product. Which is same for all the products. Now for all the products we cannot create a new route manually. So, we can create a dynamic route that will take the product id as a parameter and render the product details page.

Let's make a simple example of dynamic routing in our application.

In the `components` folder, create a new file called `Product.jsx`.

```js {.line-numbers}
// src/components/Product.jsx
import React from "react";
const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <p>This is the details page for product</p>
    </div>
  );
};
export default Product;
```

Now, we can create a dynamic route for this component in the `App.jsx` file. We can use the `:id` syntax to create a dynamic route that will take the product id as a parameter.

```js {.line-numbers}
// src/App.jsx
import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contacts"));
const Profile = lazy(() => import("./components/Profile"));
const Product = lazy(() => import("./components/Product"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          >
            <Route
              path="profile"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="product/:id" // Dynamic route for product details
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Product />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
```

> Here, we have added a new route with the path `product/:id` which will take the product id as a parameter. The `:id` part is a dynamic segment that will match any value in that position of the URL.

Now, when we navigate to the `product/:id` route, the `Product` component will be rendered and we can access the product id from the URL.

Now, To render the correct product details, we need to access the `id` parameter from the URL in the `Product` component. We can do that using the `useParams` hook from `react-router`.

```js {.line-numbers}
// src/components/Product.jsx
import React from "react";
import { useParams } from "react-router";
const Product = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  return (
    <div>
      <h1>Product {id}</h1>
      <p>This is the details page for product {id}</p>
    </div>
  );
};
export default Product;
```

Now, we can Input any parameters in the URL like `localhost:3000/product/1`, `localhost:3000/product/2`, etc. and it will render the `Product` component with the corresponding product id.

Which is great but I want to make it a little more realistic. So, let's create a new component for the named `products` and then we can link to the product details page from that component.

Here is a small data set of products that we can use to render the products list.

```js {.line-numbers}
// src/Data/products.js
const products = [
    {
        id: 1,
        name: "Apple iPhone 14",
        description: "The latest Apple smartphone featuring a 6.1-inch Super Retina XDR display, A15 Bionic chip, and advanced dual-camera system."
    },
    {
        id: 2,
        name: "Sony WH-1000XM5 Headphones",
        description: "Premium wireless noise-cancelling headphones with up to 30 hours of battery life and superior sound quality."
    },
    {
        id: 3,
        name: "Dell XPS 13 Laptop",
        description: "Ultra-thin 13-inch laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD, and a stunning InfinityEdge display."
    },
];
export default products;
```

Now, we can create a new component called `Products.jsx` in the `components` folder and also I'm going to style it using `bootstrap`.


```js {.line-numbers}
// src/components/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "bootswatch/dist/darkly/bootstrap.min.css"; // Import Bootswatch theme CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

```js {.line-numbers}
// src/components/Products.jsx
import React from "react";
import { Link } from "react-router";
import products from "../Data/products";

const Products = () => {
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="" key={product.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
```

Also, I added a new link and route for the `Products` component in the `App.jsx` file.

```js {.line-numbers}
// src/App.jsx
import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contacts"));
const Profile = lazy(() => import("./components/Profile"));
const Product = lazy(() => import("./components/Product"));
const Products = lazy(() => import("./components/Products"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          ...   {/* everything else remains the same */}
          <Route
            path="products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Products />
              </Suspense>
            }
          /> {/* Route for Products */}
          <Route
            path="product/:id" // Dynamic route for product details
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Product />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
```

```js {.line-numbers}
// src/components/Navbar.jsx
import React from "react";
import { Link, Outlet } from "react-router"; // Use react-router-dom

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4"      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyApp
          </Link>
          <div className=" navbar-collapse">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link> {/* Link to the Products page */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
```

And now we can go to the `Products` page and see the list of products. When we click on the "View Details" button, it will navigate to the product details page for that product.

Now, how do we get the exact product details from the `products` data set? We can use the `useParams` hook to get the product id from the URL and then find the product in the `products` data set.

```js {.line-numbers}
// src/components/Product.jsx
import React from "react";
import { useParams, Link } from "react-router";
import products from "../Data/products";


const Product = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product in the products data set

  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not found
  }

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Link to="/products" className="btn btn-secondary">
        Back to Products
      </Link>
    </div>
  );
};
export default Product;
```

> Here, we are using the `useParams` hook to get the `id` parameter from the URL. Then, we are using the `find` method to find the product in the `products` data set that matches the `id`. If the product is not found, we return a message saying "Product not found".

Now, when we navigate to the product details page, it will show the product name and description based on the product id in the URL.

