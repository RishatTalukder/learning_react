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

# Some debugging tips

Before moving on with this project there is some issues that you may face while working with `React`. The `first issue` I think is the `auto refresh` of the app. 

As we downgraded from `React 19` to `React 18`, the `auto refresh` feature of the app may not work. So, to fix this issue, you can run the following command in your terminal.

```bash

npm install react-scripts@latest

```

If this doesn't work, you can go to the `package.json` file in your app and change the `scripts` to the following.

```json

"scripts": {
    "start": "react-scripts start --watch",
    ........
  },

```

This will start the app in `watch` mode and the app will `auto refresh` when you make changes in your code.

##### An easy task for you to do

Now, that you have successfully created your first component and used it in your app, I have a task for you.

- Create a new component for the `App` component we made to reactify the `Product List` text. Than import the `ProductList` component in the `App` component and finally import the `App` component in the `index.js` file and render it.


# React Fragments

If you have done the task above, you may have noticed that the `Product List` text is wrapped inside a `div`. This is because `React` doesn't allow to return multiple elements from a `Functional Component`. for example:

```js

const App = () => {
    return (
        <h1>Product List</h1>
    );
};

```

This is `OK`. But if you do this:

```js

const App = () => {
    return (
        <h1>Product List</h1>
        <h2>Product List</h2>
    );
};

```

This will cause an error. Because `React` doesn't allow to return multiple elements from a `Functional Component`. So, to fix this issue, you can wrap the elements inside a `div` or a `React Fragment`.

```js

const App = () => {
    return (
        <React.Fragment>
            <h1>Product List</h1>
            <h2>Product List</h2>
        </React.Fragment>
    );
};

```

This will fix the issue. But there is a shorthand for `React.Fragment`. You can use `<>` and `</>` instead of `<React.Fragment>` and `</React.Fragment>`.

```js

const App = () => {
    return (
        <>
            <h1>Product List</h1>
            <h2>Product List</h2>
        </>
    );
};

```

> Remember to always return a single element from a `Functional Component`. You can't return multiple elements from a `Functional Component`. You can wrap the elements inside a `div` or a `React Fragment` to fix this issue.


Before we move on to the next section you should install `React Developer Tools` extension in your browser. This extension will help you to debug your react app. Maybe not now nut when our project gets bigger and bigger, this extension will help you to debug your app.

## What are we making?

The first project will be like a small product list of some products. I was thinking of coping the `Startech` website front page. Let's see how it looks.

![alt text](image.png)

Well, you can see that there are some products on the screen, the title of the product, the product image, It's price, and some other things. It's looks fairly simple. So, Let's try make something like this.

## Making the Components

So, let's start by creating the components we need for this project. From the image above, we can see that we need the following things:

- A `Product` component that will render a single product.
- A `Product Name` component that will render the title of the product.
- A `Product image` component that will render the image of the product.
- A `Product price` component that will render the price of the product.

- We also have 10 products in the image above. So, we need to create a `ProductList` component that will render all the products.
- We will also try to make this project responsive for good user experience.

## Product Component

So, let's start by creating a `Folder` named `components` in the `src` folder. In this folder, we will create all the components we need for this project.

So, create a new file named `Product.js` in the `components` folder and write the same code we wrote for the `ProductList` component.

```js

import React from 'react';

const Product = () => {
    return (
        <div>
            <h1>Product</h1>
        </div>
    );
};

export default Product; // Don't forget to export the component.

```

> you can also use the `ES7 React/Redux/GraphQL/React-Native snippets` extension to create a `Functional Component` template by writing `rafce` and pressing `tab`.

Now, Let's make a rough product component. 

```js

import React from "react";

const Product = () => {
  return (
    <div>
      <h1>Image</h1>
      <h2>Product Name</h2>
      <p>Price</p>
    </div>
  );
};

export default Product;


```

This is a rough `Product` component. We will make it better later. We have a Single product with an `Image`, `Product Name`, and `Price`. Now, we follow the steps of importing the `Product` component in the `ProductList` component and the `ProductList` component in the `App` component.

So, go to the `ProductList` component and import the `Product` component.

```js

import React from "react";
import Product from "./components/Product";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Product />
    </div>
  );
};

export default ProductList;

```

Now, I think you know what to do next. Import the `ProductList` component in the `App` component and render it in the `index.js` file.

```js

// App.js

import React from "react";

import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default App;

```

Now, all you jave to do is start the server by running `npm start` in your terminal and you should see the `Product List` text on the screen. This is the `Product List` component we created.

Now, with the power of `nesting components`, you can create a multiple products in an instant. Just like this:

```js

// ProductList.js

import React from "react";
import Product from "./components/Product";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;

```

> I will be commenting the File names at the top of the file. This is a good practice to keep track of the files you are working on.

This should render 10 products on the screen. 

But it's not going to be that easy. We need to make the `Product` component better and also dynamic. 

## Props

`Pros` are one of the if not the most important thing in `React`. `Props` are used to pass data from one component to another. 

Let's send some Data to the `Product` component from the `ProductList` component. 

Now before we do that I want youy all to think about what a `Component` is. A `Component` is a `Function` that returns `JSX`. 


### A `Component` is a `FUNCTION`

Like every Function in every know `Programming Language`, a `Function` can take `Arguments`. So, a `Component` can also take `Arguments`. These `Arguments` are called `Props` in `React`.

That's it! we will just pass some `Props` to the `Product` component from the `ProductList` component as `Arguments`.

Let's learn the react way of passing `Props` to a `Component`.

### Passing Props

To pass `Props` to a `Component`, you can pass them as `Attributes` to the `Component` just like you pass `Attributes` to an `HTML` element.

So, let's pass some `Props` to the `Product` component from the `ProductList` component.

```js

// ProductList.js

import React from "react";
import Product from "./components/Product";

const ProductList = () => {
  return (
    <div>
      <h1>
        Product List
      </h1>
      <Product name="Product 1" price="100" />
      <Product name="Product 2" price="200" />
      <Product name="Product 3" price="300" />
    </div>
  );
};

export default ProductList;

```

Here we are passing two `Props` to the `Product` component. The `name` and the `price` of the product. Now, let's receive these `Props` in the `Product` component.

```js

// Product.js

import React from "react";

const Product = (props) => { // Receiving the Props
  return (
    <div>
      <h1>Image</h1>
      <h2>{props.name}</h2> {/* Using the Props */}
      <p>Price: ${props.price}</p> {/* Using the Props */}
    </div>
  );
};

export default Product;
```

Now, whats happening here? 

- We are passing two `Props` to the `Product` component from the `ProductList` component as `Attributes`. 
- We are receiving these `Props` in the `Product` component as `Arguments` in the `Function`.
- We are using the `Props` in the `Product` component by using `props.name` and `props.price`.
  - As you can see in the Above code, we are using the `Props.name` and `Props.price` inside `{}`. This is because we are using `JSX` and we can't write `JavaScript` code inside `JSX`. So, we use `{}` to write `JavaScript` code inside `JSX`. This `{}` is referred to as `Expression` in `vanilla JavaScript`. We will talk more about `Expressions` in the next part.

Now, if you start your app by running `npm start` in your terminal, you should see the `Product 1`, `Product 2`, and `Product 3` on the screen with their prices.

This is the power of `Props` in `React`. You can pass data from one component to another and make your app dynamic.

Now, we need to learn some more `JS` theory before we move on to the next section. So, let's learn about `destructuring` in `JS`.

#### Destructuring

`Destructuring` is a `JavaScript` expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

If you remember, we are passing `Props` to the `Product` component from the `ProductList` component. We are passing two `Props` to the `Product` component. The `name` and the `price` of the products. Now if we just `console.log` the `Props` in the `Product` component and see what we get.


```js

// Product.js

import React from "react";

const Product = (props) => { // Receiving the Props
  console.log(props); // Logging the Props
  return (
    <div>
      <h1>Image</h1>
      <h2>{props.name}</h2> {/* Using the Props */}
      <p>Price: ${props.price}</p> {/* Using the Props */}
    </div>
  );
};

export default Product;
```

Now, go to the browser and open the `inspect element` by right clicking on the screen and selecting `inspect`. Then go to the `console` tab and you should see the `Props` object logged in the console.

![alt text](image-1.png)

All 3 of the `Product` components are logged in the console. Adn they are shown as `Objects`. These `Objects` have two `Properties`. The `name` and the `price` of the product. That's why we can use the `.` operator to access the `name` and the `price` of the product.

> `props.name` and `props.price`.

But there is a issue with getting the `Props` like this. If you have a lot of `Props` to get, you will have to `write` a lot of `props.<prop-name>` to get the `Props`. This is where `Destructuring` comes in.

We can `destructure` the `Props` and turn it's `Properties` into `Variables`. Then we can use these `Variables` to get the `Props`.

```js

// Product.js

import React from "react";

const Product = (props) => { // Receiving the Props
  const { name, price } = props; // Destructuring the Props
  return (
    <div>
      <h1>Image</h1>
      <h2>{name}</h2> {/* Using the Props */}
      <p>Price: ${price}</p> {/* Using the Props */}
    </div>
  );
};

export default Product;
```

Here we are destructuring the `Props` object and turning it's `Properties` into `Variables`. And than we are using those variables to get the `Props`.

There are other ways to `destructure` the `Props` object. You can `destructure` the `Props` object directly in the `Arguments` of the `Function` like this:

```js

// Product.js

import React from "react";

const Product = ({ name, price }) => { // Destructuring the Props
  return (
    <div>
      <h1>Image</h1>
      <h2>{name}</h2> {/* Using the Props */}
      <p>Price: ${price}</p> {/* Using the Props */}
    </div>
  );
};

export default Product;
```

> I personally like this way of `destructuring` the `Props` object. It's clean and easy to read.

Now, if you start your app by running `npm start` in your terminal, every should be working fine.


#### Expressions

As you can see in the above code we are using `{}` to `destructure` the `Props` object and to use the `Props` in the `Product` component. This `{}` is referred to as `Expression` in `vanilla JavaScript`.

`Expressions` are used to compute values. To put this more simply, `Expressions` are used to write `JavaScript` code inside `JSX`.

As a Component returns `JSX`, you can't write `JavaScript` code inside the jsx. So, you use `{}` to write `JavaScript` code inside `JSX`. But you can not write `every JavaScript` code inside `{}` like statements, loops, etc. You can only write
`code that returns a value`.

Here's anopther way to remember the difference between `destructuring` and `expressions`.

> Outside the `jsx` you `destructure` with `{}` and inside the `jsx` you use `{}` to write `code that returns a value` or `expressions`.


## Some What Dynamic Product List

Now, that we have learned about `Props`, `Destructuring`, and `Expressions`, let's make the `Product List` component a little bit dynamic.

Now, If er look at the ProductList component, we are rendering the `Product` component 3 times with the same `Props`. This is not how a `Product List` works. 

A `real life` product list can have `n` number of products each with different `name`, `price`, `image`, etc. So, we need to make the `Product List` component a little bit dynamic.

Now, let's try to make this `Product List` component a little bit dynamic. 

```js

// ProductList.js

import React from "react";
import Product from "./components/Product";

const product1 = {
  name: "Product 1",
  price: 100, 
}; // Product 1

const product2 = {
  name: "Product 2",
  price: 200,
}; // Product 2

const product3 = {
  name: "Product 3",
  price: 300,
}; // Product 3

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      {/* Product 1 */}
      <Product name={product1.name} price={product1.price} />
      {/* Product 2 */}
      <Product name={product2.name} price={product2.price} />
      {/* Product 3 */}
      <Product name={product3.name} price={product3.price} />
    </div>
  );
}

export default ProductList;

```

### Using the Spread Operator

Spread operator is a new feature in `ES6` that allows an `iterable` to expand in places where `0+ arguments` are expected. It's like `rest parameters` but for `Arrays` and `Objects`.

Mainly what it does is that it takes an `Array` or an `Object` and `spreads` it into individual elements.

This example will make it more clear. Goto the inspect option in any page of your browser and type the following code in the console. Do the following steps:

```js

const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(...arr); // 1 2 3 4 5

```

You should see some thing like this in the console.
![alt text](image-2.png)

So, if we log a iterable like an `Array` or an `Object` it only prints the `Array` or the `Object`. But if we `spread` the `Array` or the `Object` it prints the individual elements of the `Array` or the `Object`.

> The `...` or `spread operator` is mainly used to `copy` an `Array` or an `Object` into another `Array` or `Object`. But in react we can use it to `spread` the `Props` of an `Object` into individual elements.

As we know the attributes we are passing as props are the same as the properties of the object and these are eventually going to be stored in the `props` object of the `Product` component. So, we can make different objects for different products and pass them as props to the `Product` component.

But a better way would be to spread the `product` objects while passing them as props to the `Product` component.

```js

// ProductList.js

import React from "react";
import Product from "./components/Product";

const product1 = {
  name: "Product 1",
  price: 100,
}; // Product 1

const product2 = {
  name: "Product 2",
  price: 200,
}; // Product 2

const product3 = {
  name: "Product 3",
  price: 300,
}; // Product 3

const ProductList = () => {
  return (
    <div>
      {/* Product 1 */}
      <Product {...product1} /> {/* Spreading the product object */}
      {/* Product 2 */}
      <Product {...product2} /> {/* Spreading the product object */}
      {/* Product 3 */}
      <Product {...product3} /> {/* Spreading the product object */}
    </div>
  );
};

export default ProductList;

```

> In a `React` component, while passing `Props` to another component, if the `Props` object has the same `Properties` as the `Attributes` you are passing, you can `spread` the `Props` object while passing it as `Attributes`.

> The `...` or `spread operator` is spreading the `product` object into individual elements. So, the `Product` component will receive the `name` and the `price` of the product as `Props`.

This will work as a charm. Let's break down What just happened.

- We made `three product objects` with the `name` and the `price` of the product.
- We passed these `product objects` as `Props` to the `Product` component.
- We `spread` the `product objects` while passing them as `Props` to the `Product` component.
- As the `product objects` have the same `Properties` `name` and `price` as the `Attributes` we are passing, we can `spread` the `product objects` while passing them as `Props` to the `Product` component. 
- In this way don't need to write `name={product1.name} price={product1.price}` for every product. 


> Moral of the story: If the object we are passing has the same properties as the attributes were passing as props, we can spread the object while passing it as props.

Now, we can change the name and the price of the products in the `product objects` (product1, product2, product3) and the `Product` component will render the products with the new `name` and `price`.

```js

// ProductList.js

import React from "react";
import Product from "./components/Product";

const product1 = {
  name: "AMD Ryzen 5 5600X",
  price: "11,500",
}; // Product 1

const product2 = {
  name: "NVIDIA RTX 3060",
  price: "45,000",
}; // Product 2

const product3 = {
  name: "Corsair Vengeance RGB Pro 16GB",
  price: "6,500",
}; // Product 3

const ProductList = () => {
  return (
    <div>
      <Product {...product1} />
      <Product {...product2} />
      <Product {...product3} />
    </div>
  );
};

export default ProductList;

```

Now everything should be working fine. If you start your app by running `npm start` in your terminal, you should see the `Product List` with the new products on the screen.

### Making the Product Component More dynamic using Array of Objects

The `Product List` component is now a little bit dynamic and we can change a product detail by changing the `product object(product1, product2, product3)` in the `ProductList` component. But we can make it more dynamic by using an `Array of Objects`.

Because when we are using a `web app`, most of the time data is coming from a `database` or an `API`. And the data is in the form of an `Array of Objects`. 

A huge issue in the previous approach is that we have to create a new `product object` for every product. This is not how a `real life` `Product List` works. A `real life` `Product List` has `n` number of products and we can't create a new `product object` for every product.


So, what we need is a way to store the `product objects` in an `Array` and pass them as `Props` to the `Product` component. This is where an `Array of Objects` comes in.

So, let's make the `Product List` component more dynamic by using an `Array of Objects`.

```js

// ProductList.js

import React from "react";
import Product from "./components/Product";

const products = [
  {
    name: "AMD Ryzen 5 5600X",
    price: "11,500",
  },
  {
    name: "NVIDIA RTX 3060",
    price: "45,000",
  },
  {
    name: "Corsair Vengeance RGB Pro 16GB",
    price: "6,500",
  },
]; // Array of Objects

const ProductList = () => {
  return (
    <div>
      <Product {...products[0]} />
      <Product {...products[1]} />
      <Product {...products[2]} />
    </div>
  );
};

export default ProductList;

```


Now, we have an `Array of Objects` named `products` with the same `Properties` as the `Attributes` we were passing as `Props` earlier. But issue is still not resolved. We are still passing the `product objects` 1 by 1 to the `Product` component. And we cannor realisticly make `<Product {...products[0...n]} />` for every product. So, we need some process to do this repeatedly.

### Using the `map` method

The `map` method is used to `iterate` over an `Array` and `return` a new `Array`. The `map` method takes a `callback function` as an `argument` and `calls` the `callback function` for every `element` in the `Array`.

> Callback functions are `Functions` that are passed as `Arguments` to another `Function`

Simpy, the `map method` is a for loop for `Arrays` that can apply a function to every element of the `Array` and return a new `Array` with the results.

So, as we cannot use any `statements` or `loops` inside `JSX`, we can use the `map` method to `iterate` over the `products` `Array` and `return` a new `Array` with the `Product` components.

Try out this code below in a newfile outside the porject folder.

```js

const arr = [1, 2, 3, 4, 5];

const callback = (element) => {
  return element * 2;
};

const newArr = arr.map(callback);

console.log(newArr);

```

> When iterating over an `Array` using the `map` method, the `callback function` takes 3 `arguments`. The `element` or the `value` of the index, the `index` of the element, and the `Array` itself.

Then you can run the file in the terminal as you have `node` installed in your system. open the terminal and run the following command.

```bash

node <filename>.js

```

we can write the callback function inside the `map` method as an `anonymous function`.

```js

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((element) => {
  return element * 2;
});

console.log(newArr);

```

You should see the `newArr` logged in the console. This is the `new Array` with the `elements` of the `arr` `Array` multiplied by `2`.

We, can use this `map` method to `iterate` over the `products` `Array` and `return` a new `Array` with the `Product` components.

So, let's make a new array of products and use the `map` method to `iterate` over the `products` `Array` and `return` a new `Array` with the `Product` components.

```js

// ProductList.js
import React from "react";
import Product from "./components/Product";

const products = [
  {
    name: "AMD Ryzen 5 5600X",
    price: "11,500",
  },
  {
    name: "NVIDIA RTX 3060",
    price: "45,000",
  },
  {
    name: "Corsair Vengeance RGB Pro 16GB",
    price: "6,500",
  },
]; // Array of Objects

const newProducts = products.map((product) => {
  return <Product {...product} />;
}); // Using the map method to iterate over the products Array

const ProductList = () => {
  return (
    <div>
      {newProducts} {/* Returning the new Array */}
    </div>
  );
};

export default ProductList;

```

