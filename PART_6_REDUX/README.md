# REDUX!!!!!

FINALLYYYYYY!!! I"VE REACHED THE END THIS CRUEL WORLD OF REACTJS. I CAN FINALLY MOVE ON AFTER I FINISH THIS.

So, with that said, I'm `Md. Rishat Talukder` and let's get started.

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_react)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

# Overview

`Redux` is a predictable state container for JavaScript apps, often used with libraries like React for building user interfaces. It helps manage the state of an application in a centralized way, Bluh Bluh Bluh.

Sortly it's a complex version of `useReducer` hook.

Does exactly what `useReducer` does but on a larger scale.

Although, `useReducer` is can be used for complex state management in larger applications, `Redux` provides a more `structured` and `scalable` approach to state management.

_With More Features, Comes More Boilerplate_

So, in this article/project, I'll try to go in-depth of the `Redux` library and how to use it effectively in a React application.

I made a simple `Cart` application to demonstrate the usage of `useReducer` hook. I'll do the same thing with `Redux` now.

Same application, but with `Redux`.

You know the drill, Make a new React app and clean it up.

I made a new React app with `Vite` and named it `Cart_Redux`.

Open your app in your code editor.

And we are ready to go.

# Setup and Installation

First of all, even though this is a `alternative` to `useReducer`, and internal theory is similar, it still can be like magic and overwhelming at first.

So, try to go step by step and try to understand the similarities and differences between `useReducer` and `Redux`.

First of all, we need to install some packages.

```bash
npm install @reduxjs/toolkit react-redux
```

`@reduxjs/toolkit` is the official, opinionated, batteries-included toolset for efficient Redux development. It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and many many other things.

`react-redux` is the official React bindings for Redux. It allows React components to read data from a Redux store, and dispatch actions to the store to update the state.

Now, let's create a folder named `redux` inside the `src` folder.

Inside the `redux` folder, create another folder named `slices`.

Inside the `redux` folder, create a file named `store.js`.

Now, inside the `slices` folder, create a file named `cartSlice.js`.

> Reminder: To understand the concepts of `Redux`, you should have a basic understanding of `useReducer` hook. If you don't, please check out my previous article on `REACT ADVANCED CONCEPTS`

Let's now recollect what was the main parts of `useReducer` hook.

- We make a `global context` to provide the state and dispatch function to the whole app.

- We make a `reducer` function and an `initial state`.

- We use the `useReducer` hook to bind the `reducer` and `initial state` and it returns the `state` and `dispatch` function.

- The dispatch function is used to send `actions` to the `reducer` function to update the state.

This was the basic idea of `useReducer` hook, right?

`Redux` does the same things but in a more `structured` and `scalable` way.

First we make a `global context` to provide the state and dispatch function to the whole app.

How do we do that?

Let's open the `store.js` file.

```js {.line-numbers}
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit"; // redux toolkit gives us this function to configure the store

const store = configureStore({
  reducer: {
    // we will add our reducers here
  },
});

export default store;
```

> Here, we are using the `configureStore` function from `@reduxjs/toolkit` to create a store. The `configureStore` function takes an object as an argument, where we can pass our `reducers`.

Now, you might think, We are passing a `reducer` object, where we will store our `reducer` functions? Why is that? In the use of `useReducer`, we only had one `reducer` function and that was it.

Patience, young duckling.

In `Redux`, we can have multiple `reducer` functions, each managing a specific part of the state. We can have multiple `features` in our app and those features can have their own `reducer` functions.

So, in this `store`, we will combine all the `reducer` functions and pass them to the `configureStore` function. which will create a single store for our app.

This store will be the `global context` for our app.

Now, we need to provide this store to our whole app.

Open the `main.jsx` file.

```js {.line-numbers}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux' // we need to import the Provider component from react-redux
import store from './redux/store' // we need to import the store we just created

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* we need to wrap our app with the Provider component and pass the store as a prop */}
      <App />
    </Provider>
  </StrictMode>,
)
```

> Here, we are using the `Provider` component from `react-redux` to provide the store to our whole app. We need to wrap our `App` component with the `Provider` component and pass the store as a prop.

And here is another question that might pop up in your head.

When we were using `useReducer`, we used the `context` API to provide the state and dispatch function to our whole app directly. but this time we are using the `Provider` component from `react-redux`. and inside that we are directly using the `store`?

The `store` has the `reducers` right? So, how does the `Provider` component know which part of the state to provide to which component?

Hush, little one. Let daddy explain.

The `Provider` component from `react-redux` is a special component that is designed to work with `Redux` stores. It uses the `React Context` API under the hood to provide the store to all the components in the app.

Now, if you remember, to get a specific state or dispatch function from the `useReducer` hook, we used the `useContext` hook to get the context value and then destructured the state and dispatch function from it.

`Redux` has it's own hooks to get what we need from the store.

So, in short, when we are adding a reducer to the store, we are basically telling the `Provider` component that whatever is connected to this reducer(states, actions, dispatch functions) will be accessible to the whole app.

> While doing this you might get an error or warning. It's because there is no reducer added to the store yet. 

That's what we are going to do next.

Let's open the `cartSlice.js` file.

```js {.line-numbers}
import { createSlice } from "@reduxjs/toolkit"; // we need to import the createSlice function from redux toolkit

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart", // name of the slice
  initialState, // initial state of the slice
  reducers: {
    // we will add our reducer functions here
  },
});

console.log(cartSlice);

export default cartSlice
```

> Here, in this file I made a `slice`. This is a wierd naming convention but as we can recall we needed a initial state and a way to handle actions.

A slice will do that for us. Think of a slice as a partition for different features and state.

`createSlice` is like a more advanced version of the `useReducer` Hook. The hook gives use a state variable and a dispatch function where we pass the reducer and the reducer function. This slice will do all that for us automatically.

As you can see that I passed a object and inside that object. I can pass various types of properties but for now I passed the name(just to name the slice, we will come back to this later), the initial state which will be handled by the redux, and an empty reducer property where we will add our action handling logic.

For more information about this createSlice() function I've logged it to the console.

than exported it.

Now, we can invoke/call/import this file to see what is shown in the console of the browser.

I'll import this in the `store.js` file because we will connect the slice with the store soon.

```js {.line-numbers}
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit"; // redux toolkit gives us this function
import './slices/cartSlice' // we need to import the cartSlice we just created

... // rest of the code stays the same
```

Now, if you open the browser console, you will see something like this.

![alt text](image.png)

As you can see this slice provides us a lot of functions built in like `actions`, `caseReducers`, `getInitialState`, `name`, `reducer`, `selectors` etc.

And for now your eyes should be on the `reducer` property of the slice.

Remember I told you that we will add reducers to the store?

This is the reducer that we will add to the store.

This is not a special function, this is exactly what we wrote ourselves for `useReducer` hook. Now it is automatically created for us. If you look closer it also has those same `parameters` (state, action) that we used in the `useReducer` hook.

So, what do we do now?

Instead of exporting the whole slice, we will export the `reducer` property of the slice.

```js {.line-numbers}
// src/redux/slices/cartSlice.js
... // rest of the code stays the same
export default cartSlice.reducer; // we will export the reducer property of the slice
```

Now, we can import this reducer in the `store.js` file and add it to the store.

```js {.line-numbers}
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from './slices/cartSlice' // we need to import the cartReducer we just created

const store = configureStore({
  reducer: {
    cart: cartReducer, // we will add our cartReducer here
  },
});

export default store;
```
And boom! We have added our first reducer to the store.

And now, if you open the browser console, you will see that the warning/error is gone.

And now we have the basic setup ready.

I know I know you have this question in your head, "How do I handle actions and update the state?"

Well, you're a curious little fella, aitcha?!

I'll get to that asap.

But first we need to lay the structure of the app.

First, getting the data.

Now, we know that the data needs to be a state variable so that we can update it.

So, let's get the data.

```js {.line-numbers}
// src/data/cartData.js
export const cartData = [
  {
    id: 1,
    name: "Product 1",
    image: "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?semt=ais_hybrid&w=740&q=80",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?semt=ais_hybrid&w=740&q=80",
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?semt=ais_hybrid&w=740&q=80",
    price: 300,
    quantity: 1,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?semt=ais_hybrid&w=740&q=80",
    price: 400,
    quantity: 1,
  },
];
```

> Heres some dummy data for the cart items. This is exactly the data we used in our previous `cart` project(REACT-ADVANCED (PROJECT 12)). I saved this dummy data inside a new file `data/cartData.js`.

Now, we load the data. So, we update the initial state and the data should be available everywhere on the app.

```js {.line-numbers}
// src/redux/slices/cartSlice.js
import { cartData } from "../../data/cartData";

const initialState = {
  items: cartData,
  totalQuantity: 0,
  totalAmount: 0,
};

// rest of the code stays the same

export default cartSlice.reducer;
```

Now, we can use the initial state in our app.

So, now let's see how we can use this state variable in our app.

Let's make the structure of the app.

First,

