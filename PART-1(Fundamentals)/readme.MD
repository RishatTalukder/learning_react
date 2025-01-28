# REACT 18 (PART-1 : Basics, Rules, Syntax, and Some FUN PROJECTS)

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_react)
- [Gmail](talukderrishat2@gmail.com)

## What is React?

I think you all know what `REACT` is but let's just forget that. `React` is a front-end library developed by `Facebook`. It's a library not a framework. That's it!

## Installation

First you need `Node` js installed in your computer. If you don't have it installed, you can download it from [here](https://nodejs.org/en/).

After installation check the version of `Node` and `NPM` by running the following commands in your terminal.

```bash

node -v

npm -v

```

If a version number is shown then you are good to go. Now, create a new folder with any name you want and navigate to that folder in your terminal.

Now, run the following command to create a new react app.


```bash

npx create-react-app first-app

```

This will create a react app named `my-app`, in your folder with all the necessary files and folders needed for a react app. But before going deep into the `my-app` folder, we need to make some changes. 

As `REACT 19` is out and with it's all new issues and bugs, I'll be using `REACT 18` for this series. So, we need to install `REACT 18` in our app. To do that, navigate to the `my-app` folder in your terminal and run the following command.

```bash

npm install react@18 react-dom@18

```

This will install `REACT 18` in your app. Now, you are ready to go. To start the app, run the following command.

```bash

npm start

```

This will start the app in your default browser. You can also open the app in your browser by going to `http://localhost:3000/`.

# The Process of Learning React

I don't like to `memorize` things. I like to `understand` it, thr work flow, how data is getting changed and loaded onto our screen. So, I think Nothing is better than learning by making projects. So, I'll be making small projects in every part of this series and will try my best to make every project related to the topic of that part. So, As part one is about the basics of react, I'll be making some basic projects in this part. Like these `Three` projects:

- Product List.
- Landing Page.


So, let's get started with the first one.

# Project-1: Product List

## Remove Boilerplate Code

If you have read this article from the beginning, you know how to make a new `React` app. So, Now Do it yourself and you can name the app `product_list`. After creating the app, remove the `src` folder completely. This will effectively break your app.

The idea is to start from scratch. So, now we will create a new `src` folder and inside that folder, we will create a new file named `index.js`. This file will be the entry point of our app. So, let's create the file and write some code in it.

> Don't forget to install `react@18` and `react-dom@18` in your app because we are using `React 18` in this series.

```js

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello World</h1>);

```

After writting this code, start your app by running `npm start` in your terminal. 

This should open your app in your default browser in `localhost:3000` with a `Hello World` text on the screen.

> If the browser is not opened automatically, you can open it by clicking on the link `http://localhost:3000/` in your terminal.

If you see the `Hello World` text on the screen, then congo! you have successfully removed the boilerplate code and started from scratch. 

Let's learn what just happend in the code above.

- We imported `React` and `ReactDOM` from `react` and `react-dom/client` respectively.
- We created a new `root` using `ReactDOM.createRoot` and passed the `root` element to it.

Now, what does `ReactDOM.createRoot` do?

If you go to the `public` folder in your app, you will see a file named `index.html`. In this file, you will see a `div` with an `id` of `root`. This is the `root` element we passed to the `ReactDOM.createRoot` function. This `div` is the entry point of our app. This is where all the components will be rendered.

- Then we called the `render` method on the `root` and passed a `h1` element with a text of `Hello World` to it.

It's like telling `React` to push a `h1` element with a text of `Hello World` to the `root` element. And that's what happened. The `Hello World` text is now on the screen. 

## Some Tips

I'm using `vs code` for this series and there are some extensions that will make a developer's life easier. So, I'll recommend some extensions that you can use in your `vs code`.

- `ES7 React/Redux/GraphQL/React-Native snippets` by `dsznajder`. This extension will help you to write react code faster. You can write `rfce` and press `tab` to get a functional component template. You can write `rcc` and press `tab` to get a class component template. And many more.

- `Prettier - Code formatter` by `Prettier`. This extension will help you to format your code. You can format your code by pressing `shift+alt+f`.

- `Live Server` by `Ritwick Dey`. This extension will help you to open your `html` files in your default browser. You can open your `html` files by right clicking on the file and selecting `Open with Live Server`.

- `Auto Rename Tag` by `Jun Han`. This extension will help you to rename the opening and closing tags at the same time. You can rename the opening tag and the closing tag will be renamed automatically.

Also, if you are using `chrome` or any `chrome based browser`, you can install the `React Developer Tools` extension. This extension will help you to debug your react app. You can see the `props`, `state`, `context`, `hooks`, `events`, etc. of your components.


## Making the first component

Now, that you have successfully removed the boilerplate code and started from scratch, We can have clean slate to work on. So, let's create our first component.

## What is a Component?

A `Component` is a piece of code that can be reused. It's like a function that returns `JSX`. A `Component` can be a `Functional Component` or a `Class Component`. A `Functional Component` is a simple `JavaScript` function that returns `JSX`. A `Class Component` is a `JavaScript` class that extends `React.Component` and has a `render` method that returns `JSX`.

> `JSX` is a syntax extension for `JavaScript` and it looks just like `HTML`. It's actually a `JavaScript` object that represents `HTML` adn also you completely write `HTML` in `JSX`. It's like the `JS` version of `HTML`.

So, let's create our first `Functional Component` named `ProductList`. So, go to the `src` folder and create a new file named `ProductList.js`. In this file, write the following code.

```js

import React from 'react';

const ProductList = () => {
    return (
        <div>
            <h1>Product List</h1>
        </div>
    );
};

export default ProductList;

```

> Remember to always use `PascalCase` for the name of the component. It's a convention in `React` and sometimes it's can cause errors if you don't follow the convention. So, just `Capitalize` the first letter of the component name.

Let's analyze the code above.

- We imported `React` from `react`.
- We created a simple `arrow function` or `anonymous function` named `ProductList` that returns a `div` with a `h1` element with a text of `Product List`.
- Then we exported the `ProductList` component.

> Also don't forget to export the component at the end of the file.


## Using the Component

Now, that we have created our first component, let's use it in our `index.js` file. So, go to the `index.js` file and write the following code.

```js

import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './ProductList'; // Importing the ProductList component.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductList />); // replacing the h1 element with the ProductList component.

```

Now, if you start your app by running `npm start` in your terminal, you should see a big `Product List` text on the screen. This is the `ProductList` component we created.

But this is not the right way render a component. Because there will be may more `components` in our app and we can't just put them inside `root.render` method. We need a centralized place to render all the components. So, let's make a `component` named `App` that will render all the components we create.

## Making the App Component

So, go to the `index.js` file and create a new `Functional Component` named `App`. This component will render all the components we create later. So, write the following code in the `index.js` file.

```js

import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './ProductList'; // Importing the ProductList component.

const App = () => {
    return (
        <div>
            <ProductList />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // replacing the ProductList component with the App component.

```

Now, if you start your app by running `npm start` in your terminal, you should see the same thing But this time the `ProductList` component is rendered inside the `App` component. That is the magic of `React`. You can nest components inside other components and create a tree of components.


Now, if you do this:

```js

import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './ProductList'; // Importing the ProductList component.

const App = () => {
    return (
        <div>
            <ProductList />
            <ProductList />
            <ProductList />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // replacing the ProductList component with the App component.

```

You will see three `ProductList` components on the screen. Whith out writing the `ProductList` component three times.

So, now you see how `react` makes a developer's life easier by allowing to nest components inside other components. This is the power of `React`.