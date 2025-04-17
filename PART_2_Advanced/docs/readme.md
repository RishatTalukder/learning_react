# REACT (PART-2 : Advanced & Hooks)

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_react)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

# A Small Recap of Part 1

- Made a `React` app using `create-react-app`.
- Installed `React 18` and `React dom 18` because at that time I didn't know about `React 19`.
- couldn't solve some `dependency` issues. Epic fail.
- Installed some `vs code` extensions.

  - `ES7+ React/Redux/React-Native snippets`
  - `Prettier`

- Made a `product list` app using `React`.
- Learned the rules of `React`.
- Learned about `JSX`.
- Learned about `Components`, `Props`, `Image`, `CSS`.
- Than dumped all the `css` knowledge and used `bootstrap` instead.
- Finally Did another project using `React` and `bootstrap`.
- And realized that `Create-react-app` is completely deprecated and the support is gone so that's one of the reasons why there was sooooo many `dependency` issues.
- So, we learned to create a `React` app using `Vite`.
- Adn we gave up on `React 18` and `React dom 18` and we made the second project (landing page) using the latest version of `React` and `React dom` which is `React 19` and `React dom 19`.

And we are all caught up now. So, we can start the second part of the course. Time to learn some `advanced` stuff. We will do a lot of `projects` in this part. And try to learn as much as we can.

# Structure

As I said, we will do a lot of projects in this parts and those projects won't be very big. So, I think making a new `react` app for each project is a bit of a waste of time and resources. So, I will make a single folder for all the projects and make `component` folder for the projects and we can then import those components in the `App.js` file interchangeably like plugins.

This way we can use the same react app and we won't have to make new `package` installations for each project.

The Folder structure should look like this:

```bash
├── Part-2
│   ├── docs
│   ├── react-advanced
│   │   ├── public
│   │   ├── src
│   │   │   ├── projects
│   │   │   │   ├── 1_project_name
│   │   │   │   ├── 2_project_name
│   │   │   │   ├── 3_project_name
│   │   │   │   ├── 4_project_name
│   │   │   │   ├── 5_project_name
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── vite.config.js
....................
```

Oouuuuukaaay, now with that out of the way, We can set things up.

# Setting up the project

- Satrt a new `vite` project using the command below:

```bash

npm create vite@latest react-advanced --template react
```

> npm create vite@latest is the default command to create a new vite project. which will guide you through the process of creating a new vite project. But skipping the guide we can write the name of the project right after the command and also we can use the `--template` flag to specify the template we want to use. In this case, we are using the `react` template. So, we are creating a new vite project with the name `react-advanced` and using the `react` template.

- Now, we can go to the project folder and install the dependencies along with `bootstrap`:

```bash

cd react-advanced
npm install bootstrap

```

- Now, we can open the project in `vs code` and then set up the `srs` folder for the projects.

- Make two new directories inside the `src` folder named `projects` and `data`. We can remove the `assets` folder, the `App.css` and also `index.css` file because we will use `bootstrap` for styling. Also don't forget to comment out the `import` statement for the `index.css` file in the `main.jsx` file. And also remove the `import` statement for the `App.css` file in the `App.jsx` file. And we can import the `bootstrap` css and `js` files in the `App.jsx` file. The `App.jsx` file should be like this after the changes:

```js {.line-numbers}
//app.jsx

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return <>Hello World</>;
}

export default App;
```

```js {.line-numbers}
//main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- Now, we can start the development server using the command below:

```bash
npm run dev

```

this will start the development server and you should see a `Hello World` message in the browser.

We are ready to start the projects now.

#### **Some more `useful extensions` for `vs code`**

**PREVIOUSLY INSTALLED:**

- `ES7+ React/Redux/React-Native snippets` - For using `React` snippets.
- `Prettier` - For formatting the code.

**NEWLY INSTALLED:**

- `Advanced New File` - For creating new files and folders easily.
- `Auto Close Tag` - For auto closing tags in `HTML` and `JSX`.
- `Auto Rename Tag` - For auto renaming tags in `HTML` and `JSX`.

Now with all the setup done, we can start with `React` `advanced` `projects`.

# Let's make a `Counter`

Make a component named `Counter.jsx` in `projects/project_1/Counter.jsx` and add the code below in `Counter.jsx` file and also import it in the `App.jsx` file.

```js {.line-numbers}
// projects/project_1/Counter.jsx

import React from "react";

const Counter = () => {
  return <div>Counter</div>;
};

export default Counter;
```

```js {.line-numbers}
// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./projects/1_counter.jsx";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}
export default App;
```

Now let's go to the `Counter.jsx` file and `start coding`.

## Approach

- I'l make a simple `counter` app Where the Counter will start from `0`.
- We can Increase and decrease the counter by `1` using two buttons.
- And also we can reset the counter to `0` using a `reset` button.

So, what we need is a `variable` to store the `counter` value, `2 functions` to increase and decrease the counter, and a `reset` function to reset the counter.

SOOOOOO, let's make it.

### The Variable

We can take a simple variable named `count` and set it to `0` and render it in the `Counter` component.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React from "react";

const Counter = () => {
  const count = 0; // counter variable
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {" "}
      {/* Centering the counter */}
      {count} {/* Rendering the counter */}
    </div>
  );
};

export default Counter;
```

> The should be a 0 in the middle of the screen.

### Increase, Decrease and Reset

We need three buttons to increase, decrease and reset the counter. So, let's make three buttons and add some `bootstrap` classes to style them.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React from "react";

const Counter = () => {
  const count = 0; // counter variable
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>
      <div className="mt-1">
        <button className="btn btn-danger mx-2">decrease</button>
        <button className="btn btn-primary mx-2">increase</button>
      </div>
      <button className="btn btn-secondary mt-2">Reset</button>
    </div>
  );
};
export default Counter;
```

> Now, we should see three buttons and a counter in the middle of the screen. The counter should be `0` and the buttons should be styled with `bootstrap` classes.

Now what we need to do is to make a `logic` to increase, decrease and reset the counter when we click the buttons.

There is an `attribute` for the `button` element called `onClick` which takes a function as an argument and runs that function when we click the button. So, if we make a `function` to `increase`, `decrease` and `reset` that will `increment`, `decrement` and `reset` the counter, we can pass that function to the `onClick` attribute of the button. And when we click the button, it will run the function and the counter will be updated.

So, let's make the functions and pass them to the buttons.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React from "react";

const Counter = () => {
  const count = 0; // counter variable
  const increase = () => {
    console.log("increase"); // function to increase the counter
  };
  const decrease = () => {
    console.log("decrease"); // function to decrease the counter
  };
  const reset = () => {
    console.log("reset"); // function to reset the counter
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>
      <div className="mt-1">
        <button onClick={decrease} className="btn btn-danger mx-2">
          decrease
        </button>
        <button onClick={increase} className="btn btn-primary mx-2">
          increase
        </button>
      </div>
      <button onClick={reset} className="btn btn-secondary mt-2">
        Reset
      </button>
    </div>
  );
};
export default Counter;
```

> here we are checking if the functions are working or not. So, when we click the buttons, we should see the `console` logs in the `console` of the browser. If we see the logs, that means the functions are working and we can move on to the next step.

As we can see the `console` logs are working, We can now increment, decrement and reset the count variable.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React from "react";

const Counter = () => {
  const count = 0; // counter variable
  const increase = () => {
    count++; // function to increase the counter
    console.log(count);
  };
  const decrease = () => {
    count--; // function to decrease the counter
    console.log(count);
  };
  const reset = () => {
    count = 0; // function to reset the counter
    console.log(count);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>
      <div className="mt-1">
        <button onClick={decrease} className="btn btn-danger mx-2">
          decrease
        </button>
        <button onClick={increase} className="btn btn-primary mx-2">
          increase
        </button>
      </div>
      <button onClick={reset} className="btn btn-secondary mt-2">
        Reset
      </button>
    </div>
  );
};
export default Counter;
```

> ANNNNDDDD, we broke the code. The counter is not updating or there is nothing in the screen.

This is because we are using const to declare the `count` variable. So, as const is the `immutable` variable, we can't change the value of the `count` variable. So, we need to use `let` instead of `const` to declare the `count` variable.

> Try it yourself. Change the `const` to `let` and see if it works or not.

> I'm `100%` sure it will not work. You should see the `count` variable in the `console` but the counter in the screen will not update.

Why You Asked?

Because, `React` is a `UI` library and it uses a `virtual DOM` to update the UI.

#### The Virtual DOM

`DOM` stands for `Document Object Model`. It is a `tree` structure that represents the `HTML` of the page. When we update the `DOM`, it takes a lot of time to update the `DOM` because it has to go through the whole tree and update the elements.

`React` uses a `virtual DOM` to update the `UI`. The `virtual DOM` is a lightweight copy of the `DOM`. When we update the `UI`, `React` updates the `virtual DOM` first and then updates the `DOM` with the changes. This makes the updates faster and more efficient.

The `virtual DOM` is a `JavaScript` object that represents the `DOM` of the page. When we update the `DOM`, `React` creates a new `virtual DOM` and compares it with the old `virtual DOM`. If there is a difference, it updates the `DOM` with the new `virtual DOM`. This is called `reconciliation`.

Now, how the `virtual DOM` works is that it keeps track of the `state` of the component, When we update the `state`.

> state is a `JavaScript` object that represents the `data` of the component. It is used to store the `data` that changes over time. For example, in our case, the `count` variable is the `state` of the component.

But there is no way that `react` can know that the `count` variable has changed because we are using a simple `JavaScript` variable. So, we need to tell `react` that the `count` variable is a `state` variable and it should keep track of it.

### The useState Hook

`React` provides a `hook` called `useState` to manage the `state` of the component.

> Hooks are functions that let you use `React` features in functional components. They are a way to use `state` and other `React` features without writing a class.

> Every `React` `Hook` starts with the word `use`. For example, `useState`, `useEffect`, `useContext`, etc.

The `useState` hook takes an `initial value` as an argument and returns an array with two elements. The first element is the `state` variable and the second element is a `function` to update the `state` variable.

> This hook will tell `react` that the `count` variable is a `state` variable and it should keep track of it. So, when we update the `count` variable, `react` will know that the `count` variable has changed and it will update the `UI` accordingly.

So, let's use the `useState` hook to manage the `count` variable.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    count++; // function to increase the counter
    console.log(count);
  };
  const decrease = () => {
    count--; // function to decrease the counter
    console.log(count);
  };
  const reset = () => {
    count = 0; // function to reset the counter
    console.log(count);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>

      <div className="mt-1">
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease
        </button>

        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>

      <button className="btn btn-secondary mt-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
```

> We made removed the previous `count` variable and used replaced it with the `const [count, setCount] = useState(0)` line.

> Don't forget to import the `useState` hook from `react`.

`useState(0)` will create a `state` variable named `count` and set the initial value to `0`, as we want the counter to start from `0` and also it will create a function named `setCount`.

> You can name the returned function anything you want. But it is a good/common practice to name it `set` + the name of the state variable. So, in this case, we named our variable `count`, so we named the function `setCount`. This is not a rule but a good practice.

As, the useState hook returns an array of two elements, we can use array destructuring to get the values. So, we can use `const [count, setCount] = useState(0)` to get the values.

But even though we are using the `useState` hook, we are still using the `count` variable as a simple `JavaScript` variable. So, what we need to do is to use the `setCount` function to update the `count` variable instead of using the `count` variable directly. So, we need to change the `increase`, `decrease` and `reset` functions to use the `setCount` function to update the `count` variable.

Let's do just that.

> I know this is a bit confusing but this is how `React` works.

> The `setCount` function takes a new value as an argument and updates the `count` variable.

Let's just try to increment the counter using the `setCount` function.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount(count + 1); // function to increase the counter
    console.log(count);
  };
  const decrease = () => {
    count--; // function to decrease the counter
    console.log(count);
  };
  const reset = () => {
    count = 0; // function to reset the counter
    console.log(count);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>

      <div className="mt-1">
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease
        </button>

        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>

      <button className="btn btn-secondary mt-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
```

Try clicking the `increase` button and see if the counter is increasing or not.

> The counter should be increasing by `1` when we click the `increase` button.

Alright let's recap:

- We use the `useState` hook to create a `state` variable named `count` and set the initial value to `0`.
- The `useState` hook returns an array of two elements. The first element is the `state` variable and the second element is a function to update the `state` variable.
- The state variable is a simple `vanilla` `JavaScript` variable but `react` keeps track of it.
- We use the `setCount` function to update the `count` variable instead of using the `count` variable directly.
- The `setCount` function takes a new value as an argument and updates the `count` variable.

I hope you guys understand how the `useState` hook works. We can now use the `setCount` function to update the `count` variable in the `decrease` and `reset` functions.
So, let's do that.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount(count + 1); // function to increase the counter
    console.log(count);
  };
  const decrease = () => {
    setCount(count - 1); // function to decrease the counter
    console.log(count);
  };
  const reset = () => {
    setCount(0); // function to reset the counter
    console.log(count);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>

      <div className="mt-1">
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease
        </button>

        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>

      <button className="btn btn-secondary mt-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
```

Now, we have a decent `counter` app that can increase, decrease and reset the counter.

### Another way to update the state

As, we have seen, we can pass a single value to the `setCount` function to update the state. But we can also pass a `callback` function to the `setCount` function that takes the previous state as an argument and returns the new state. This might be even more confusing but this is a better and more efficient way to update the state.

The code format should look like this:

```js {.line-numbers}
setCount((prevState) => {
  return newState;
});
```

> The `prevState` is the previous state of the component and the `newState` is the new state of the component.

As you can see, we are passing a `arrow` function to the `setCount` function that has a single argument `prevState`.

This is the exact same `count` variable that we are using in the `Counter` component. So, we can now use the `prevState` variable to update the state using the callback function. Let's implement this in our code.

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount((prevState) => prevState + 1); // function to increase the counter
    console.log(count);
  };
  const decrease = () => {
    setCount((prevState) => prevState - 1); // function to decrease the counter
    console.log(count);
  };
  const reset = () => {
    setCount(0); // function to reset the counter
    console.log(count);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>

      <div className="mt-1">
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease
        </button>

        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>

      <button className="btn btn-secondary mt-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
```

Instead of using `count + 1` to increment and `count - 1` to decrement, we are using `prevState + 1` and `prevState - 1` to increment and decrement the counter.

This method of updating the state opens up a lot of possibilities.

### A task for you to do

Our counter goes from `-infinity` to `+infinity`. I want to set a limit to the counter. I want the counter to go from `0` to `infinity` and not go below `0`.

Use your brain and the knowledge you have learned so far to implement this.

### Solution

```js {.line-numbers}
// projects/project_1/Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount((prevState) => prevState + 1); // function to increase the counter
    console.log(count);
  };

  const decrease = () => {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - 1; // function to decrease the counter
      } else {
        return prevState;
      }
    });
    console.log(count);
  };

  const reset = () => {
    setCount(0); // function to reset the counter
    console.log(count);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>

      <div className="mt-1">
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease
        </button>

        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>

      <button className="btn btn-secondary mt-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
```

### General Rules of `React hooks / useState`

- Start with the word `use`.
- Must be called inside a `React` component or a custom `hook`.(will talk about custom hooks later)
- Should be called at the `top` level of the component. (`not inside loops, conditions or nested functions`)
- `State` updates are `asynchronous`.(This means that the state updates are `not immediate`. So, if you try to `log the state variable` right after updating it, you will not see the updated value. You will see the old value.)

## Some extra

### useState Functional update

We know from the previous section that we can pass a function to the `setCount` function to update the state. In that function we can use the previous state of that `state variable` to update the state.

But we have to follow cirtain rules for it.

- The function should `always return a value`.

For your practice I won't write the code for it but I will give you the instructions.

- Make a `button` below the `reset` button and name it `double`.
- When we click the `double` button, the counter should be doubled.
- So, make a function named `double` and pass it to the `onClick` attribute of the button.
- In the `double` function, use the `setCount` function to update the state.
- In the `setCount` function, `pass a function` that takes the previous state as an argument and in that function, console log the `prevState` and look at the console to see what happens.
- Now, return the `prevState * 2` from the function and see what happens.

### Asynchronous state updates

The `setCount` function is `asynchronous`. So, if you try to log the `count` variable right after updating it, you will not see the updated value. You will see the old value.

- Console log the `count` variable right after updating it in the `double` function from the previous section and see what happens.
- You will see the old value of the `count` variable in the console even though you will see the updated value in the `UI`.

### Set time out issue

This is abother wierd thing that can happen in `React`. Let's modify the `increase` function a bit. But this time we will use the `setTimeout` function to add a `2 second delay` to the `increase` function. Everything else will be the same. So, the `increase` function should look like this:

> we also don't need the `double` button for this. So, you can remove it or keep it. It's up to you.

```js {.line-numbers}

import React, { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const increase = () => {
    setTimeout(()=>{
      setCount(count + 1);
    },3000)
    console.log(count);
  };

  const decrease = () => {
    ... // everything else is the same
  };
  const reset = () => {
    ... // everything else is the same
  };

  return (
    ... // everything else is the same
  );
};

export default Counter;

```

Now, if we click the increase button, it will wait for `3 seconds` before updating the counter and the counter will be `increased by 1`.

But if you click the `increase` multiple times in `the 3 seconds`, the counter will be increased by only `1` no matter how many times you click the button. This is because the `setCount` function is `asynchronous` and it will only update the state once. And when we are using `useState` hook and `directly updating the state`, it will only update the state once becuase the when we are updating the state, it will take the previous state and update it. So, when we are passing `count + 1` to the `setCount` function, the count variable will be the same no matter how many times we click the button. So, the counter will only be increased by `1` no matter how many times we click the button.

This is one quirk of `React` that you should know. But if you want to update the state multiple times, you can use the `setCount` functional update method. So, instead of passing `count + 1` to the `setCount` function, we can pass a function that takes the previous state as an argument and returns the new state. So, we can use the `prevState` variable to update the state. So, the `increase` function should look like this:

```js {.line-numbers}

import React, { useState } from "react";
const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const increase = () => {
    setTimeout(() => {
      setCount((prevState) => prevState + 1);
    }, 3000);
    console.log(count);
  };

  const decrease = () => {
    ... // everything else is the same
  };
  const reset = () => {
    ... // everything else is the same
  };

  return (
    ... // everything else is the same
  );
};
export default Counter;
```

This way, we are getting the previous state of the `count` variable and updating it with the `prevState` variable. Not like passing the `count` variable directly. This ensures that the state is updated correctly and everytime we click the button, `prevState` will always be updated and the counter will be increased by `1` every time we click the button. So, if we click the button `5` times in `3 seconds`, the counter will be increased by `5` and not `1` after `3 seconds`.

> This is a very important quirk of `React` that you should know. So, make sure you understand this and practice it.

## End of the project

Now, we have a decent `counter` app that can increase, decrease and reset the counter. We also learned about the `useState` hook and how to use it to manage the state of the component. We also learned about the `virtual DOM` and how it works. And we also learned about some `quirks` of `React` that you should know. But there are some other things that you should know about `useState` hook. But we cannot cover `everything` in this `project`. So, I let's move on to the `next project` and we will learn some more things about `React` in the next project.

# Project 2: Todo List

## Steps

- Make a new folder named `project_2` in the `projects` folder.
- Add a new file named `todoData.js` for the data. You can add some dummy data in the file. The data should look like this:

```js {.line-numbers}
// projects/project_2/todoData.js

const todoData = [
  {
    id: 1,
    task: "Buy groceries",
  },
  {
    id: 2,
    task: "Clean the house",
  },
  {
    id: 3,
    task: "Finish project report",
  },
  {
    id: 4,
    task: "Call mom",
  },
  {
    id: 5,
    task: "Walk the dog",
  },
];

export default todoData;
```

- Now, make a new component file named `TodoList.jsx` in the `projects/project_2` folder and import the `todoData.js` file in the `TodoList.jsx` file.

```js {.line-numbers}
// projects/project_2/TodoList.jsx

import React from "react";
import todoData from "./todoData";

const Todo = () => {
  return <div>Todo List</div>;
};
export default Todo;
```

- Now, import the `TodoList` component in the `App.jsx` file and render it in the `App` component.

```js {.line-numbers}
// App.jsx

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./projects/project_1/Counter";
import Todo from "./projects/project_2/Todo"; // importing the Todo component

function App() {
  return (
    <div className="container">
      {/* <Counter></Counter> */}
      <Todo /> {/* rendering the Todo component */}
    </div>
  );
}

export default App;
```

We are ready start coding.

## Rendering the data

We are making a simple `todo list` app where we can `add` and `delete` todos. So, we need to `render` a `list` of `todos` and also we need to `implement` the `add` and `delete` functionality.

> have the data in the `todoData.js` file.
> let's start by rendering the data in the `TodoList` component.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React from "react";
import todoData from "./todoData";

const Todo = () => {
  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Todo List</h1>
      <div className="d-flex flex-column align-items-center">
        {todoData.map((todo) => (
          <div key={todo.id}>
            <h3 className="text-center text-primary">{todo.task}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
```

> We are using the `map` function to iterate over the `todoData` array and render the `task` in a `h3` tag. We are also using the `key` prop to give each element a unique key. This is important for `React` to keep track of the elements and update them correctly.

This should render the `todo` list in the `TodoList` component. You should see a list of todos in the browser.

But this looks cluttered. So, let's add some `bootstrap` classes to style the list.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React from "react";
import todoData from "./todoData";

const Todo = () => {
  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Todo List</h1>
      <div className="d-flex flex-column align-items-center gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="card shadow-sm w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{item.task}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
```

> Looks clean to me.

Now that we have the data rendered, we can move on to the next step.

## Removing a todo

To `remove` a todo, we need to add a `delete` button to each todo item. So, let's add a `button` to the `TodoList` component and style it with `bootstrap` classes.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React from "react";
import todoData from "./todoData";

const Todo = () => {
  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Todo List</h1>
      <div className="d-flex flex-column align-items-center gap-3">
        {todoData.map((item) => (
          <div
            key={item.id}
            className="card shadow-sm w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{item.task}</h5>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
```

> Now, we should see a `delete` button next to each todo item. But this button is not doing anything right now. So, let's add a function to delete the todo item when we click the button.

Now, what we need to do is to create a `function` to delete the todo item and pass it to the `onClick` attribute of the button. But from the previous project, we know that we cannot directly update the `todoData` array because it is a `constant` variable. So, we need a `state` variable to store the `todoData` array and update it when we delete a todo item. So, let's create a `state` variable to store the `todoData` array and update it when we delete a todo item.

We can use the `useState` hook to create a `state` variable to store the `todoData` array. So, let's do that.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React, { useState } from "react";
import todoData from "./todoData";

const Todo = () => {
  const [data, setData] = useState(todoData); // state variable to store the todoData array

  const deleteTodo = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id)); // function to delete the todo item
  };

  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Todo List</h1>
      <div className="d-flex flex-column align-items-center gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="card shadow-sm w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{item.task}</h5>
              <button
                onClick={() => deleteTodo(item.id)} // passing the id of the todo item to the deleteTodo function
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
```

> Now, when we click the `delete` button, the todo item should be removed from the list. 

We are using the `filter` method to filter out the todo item with the `id` that we passed to the `deleteTodo` function.

I think this example will help you understand how the `filter` method works.

### Understanding the Filter method

The `filter` method is a `built-in` method in `JavaScript` that is used to `filter out` elements from an `array` based on a condition. It takes a `callback`. 

Make a new file named `filter_example.js` in the `projects/project_2` folder and add the following code to it:

```js {.line-numbers}
// projects/project_2/filter_example.js

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((item) => {
  return item > 5;
}); // filtering out the elements that are greater than 5

console.log(newArr); // [6, 7, 8, 9, 10]
```
> Now, run the file using `node filter_example.js` and see the output in the console. You should see an array of numbers that are greater than `5`.

The `filter` methods `callback` function takes three arguments:

- The first argument is the `current` element of the array.
- The second argument is the `index` of the current element.
- The third argument is the `array` itself.

Exactly like the `map` method. The only difference is that the `filter` method returns a new array with the elements that pass the condition in the callback function. 

So, when we are using the `filter` method to filter out the todo item with the `id` that we passed to the `deleteTodo` function, we are `checking` if the `id` of the `current` todo item is not equal to the `id` that we passed to the `deleteTodo` function because we want to remove the todo item with that `id`. So, we are using the `!==` operator to check if the `id` is not equal to the `id` that we passed.

And this way the `filter` method return me an `array` without the `id` we want to remove and after we get the new array we can just `set` the `data` state variable to the new array and the `UI` will be updated automatically.

This is how the `filter` method works.

## The Clear All 

Like the `delete` button, we can also add a `clear all` button to clear all the todo items. So, let's add a `button` below the todo list and style it with `bootstrap` classes.

```jsx {.line-numbers}
// projects/project_2/TodoList.jsx
import React, { useState } from "react";
import todoData from "./todoData";

const Todo = () => {
  const [data, setData] = useState(todoData); // state variable to store the todoData array

  const deleteTodo = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id)); // function to delete the todo item
  };

  const clearAll = () => {
    setData([]); // function to clear all the todo items
  };

  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Todo List</h1>
      <div className="d-flex flex-column align-items-center gap-3">

        ... {/* everything else is the same */}
      
      </div>
      <button onClick={clearAll} className="btn btn-danger mt-3">
        Clear All
      </button> 
      {/* button to clear all the todo items */}
    </div>
  );
};
export default Todo;
```

> We will just `set` the `data` state variable to an empty array to clear all the todo items. 

> Now, when we click the `clear all` button, all the todo items should be removed from the list.

Well that was easy. Let's move on to the hard one.

## Adding a todo

Adding to a todo list can be a bit tricky for beginners. Let's try to figure it out.

### What we need?

- We need an `input` field to enter the todo item.
- We need to get the `value` of the input field.
- We need a `button` to add the todo item.
- Also we need to add the todo item to the `todoData` array.
- We need to `update` the `UI` with the new todo item.
- We need to `clear` the input field after adding the todo item.
- We need to give the new todo item a unique `id`.
- We need to make sure that the `id` is `unique` and not already in use.

I think that's about it. So, let's do step by step.

### Adding the input field

Let's just add a simple `input` field and a `button` to the `TodoList` component. We will use `bootstrap` classes to style the input field and the button.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React, { useState } from "react";
import todoData from "./todoData";

const Todo = () => {
  const [data, setData] = useState(todoData); // state variable to store the todoData array

  const deleteTodo = (id) => {
    ... // everything else is the same
  };

  const clearAll = () => {
    ... // everything else is the same
  };

  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Todo List</h1>
      {/* input field and button to add a todo item */}
      <div className="d-flex flex-column align-items-center gap-3 mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter a todo item"
        /> 
        <button className="btn btn-primary">Add Todo</button>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        
        ...{/* everything else is the same */}
      
      </div>

      <button onClick={clearAll} className="btn btn-danger mt-3">
        Clear All
      </button>
    </div>
  );
};

export default Todo;
```

> i just added a simple `input` field that takes a `text` input and a button to add the todo item and I added some `bootstrap` classes to style the input field and the button.

We have the input field ready. Now, time for step 2. 