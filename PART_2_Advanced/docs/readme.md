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
          style={{ maxWidth: "500px" }} // to limit the width of the input field
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

### Getting the value of the input field

Getting the value from a input field can be a little tricky. But we just need to know the underlying concept logic behind it.

Let's first figure out how can we get the value of the input field.

We can use the `onChange` event to get the value of the input field.

> `onChange` event is a built-in event in `JavaScript` that is triggered when the value of an input field changes. And like a `onClick` event, we can pass a function to the `onChange` event to get the value of the input field.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React, { useState } from "react";
import todoData from "./todoData";

const Todo = () => {
  const [data, setData] = useState(todoData); // state variable to store the todoData array
  const [inputValue, setInputValue] = useState(""); // state variable to store the input value

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
          style={{ maxWidth: "500px" }} // to limit the width of the input field
          onChange={(e) => setInputValue(e.target.value)} // getting the value of the input field
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

As you can see I used the `onChange` event where I passed an `arrow` function that takes the event as an argument and in that function I used the `setInputValue` function that I created to update the `inputValue` state variable at the top of the component. So, when we type something in the input field, the `inputValue` state variable will be updated with the value of the input field.

> `e` is the event object that is passed to the `onChange` event and `e.target.value` is the value of the input field.

> We will always get a `event` object when we use the `onChange` event. So, we can use the `e.target.value` to get the value of the input field.

> The `target` property of the event object is the element that triggered the event. So, in this case, the `target` property is the input field and the `value` property is the value of the input field.

> Value of a input field will always be a string.

Now, we have a state variable that stores the value of the input field. Now, we can use this value to add a todo item to the list.

### Adding the todo item

So, that we can get a `value` from the `input field`, we can now use this value to add a todo item to the list. So, we can make a function named `handleAdd` that will add the todo item to the list. We can just pass this function to the `onClick` attribute of the button. And then,

- We need to make sure that the `inputValue` is not empty. If it is empty, we can just return from the function.

- We can use the `setData` function to update the `data` state variable.
- Than we can merge the two arrays using the `spread` operator.

> Spread operator can be used as a `syntax` to merge two arrays as the `spread` operator copies the elements of the array and adds them to the new array.

- We can make a `new array` with the `inputValue` and a copy of the `data` array using the spread operator.

- Before that we need to make sure that the `inputValue` should also have a unique `id` and the `id` should be the last `id` of the `data` array + 1. We can manage that by getting the `length` of the `data` array and adding `1` to it. So, the `id` will be `data.length + 1`.

- We can also clear the input field after adding the todo item by setting the `inputValue` state variable to an empty string.

```js {.line-numbers}
// projects/project_2/TodoList.jsx
import React, { useState } from "react";
import todoData from "./todoData";

const Todo = () => {
  const [data, setData] = useState(todoData); // state variable to store the todoData array
  const [inputValue, setInputValue] = useState(""); // state variable to store the input value

  const deleteTodo = (id) => {
    ... // everything else is the same
  };

  const clearAll = () => {
    ... // everything else is the same
  };

  const handleAdd = () => {
    if (inputValue === "") return; // if input value is empty, return from the function

    newData = {
      id: data.length + 1, // unique id for the new todo item
      task: inputValue, // value of the input field
    }
    setData((prevState) => [
      newData, // adding the new todo item to the list
      ...prevState, // merging the two arrays
    ]); // adding the new todo item to the list
    setInputValue(""); // clearing the input field
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
          style={{ maxWidth: "500px" }} // to limit the width of the input field
          onChange={(e) => setInputValue(e.target.value)} // getting the value of the input field
          value={inputValue} // setting the value of the input field
        />
        <button onClick={handleAdd} className="btn btn-primary">
          Add Todo
        </button>
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

> Now, when we click the `add todo` button, the todo item should be added to the list and the input field should be cleared.

But there is a question for you.

Why Am I passing `inputValue` to the `value` attribute of the input field?

I would encourge you to try to figure it out yourself. But if you are not able to do it, I will explain it to you.

Normally the value types in the input field is `controlled` by the `state` variable. So, when we type something in the input field, the value of the input field will be updated with the value of the `inputValue` state variable by default by. But this is controlled by the `value` attribute of the input field. The `value` attribute gets what's wriiten in the input field and shows it in the input field. But when we are adding the `value` attribute to the input field, we are controlling the value of the input field with the `inputValue` state variable.

So, when we are adding the `new Task` in the `todo` list we are updating the `inputValue` state variable to an empty string. But the value of the input field is set to the `previous` value because it is not a `state` variable. So, we need to set the `value` attribute of the input field to the `inputValue` state variable. This way, when we update the `inputValue` state variable, the value of the input field will also be updated with the value of the `inputValue` state variable.

Pheew! That was a lot of information. But I hope you understand how the `value` attribute works in the input field.

Now we have a working `todo` app that can add, delete and clear all the todo items.

## Recap

By doing these two projects, we learned a lot about `React` and how to use the `useState` hook to manage the state of the component. We also learned about the `virtual DOM` and how it works. And we also learned about some `quirks` of `React` that you should know. But there are some other things that you should know about `useState` hook. But we cannot cover `everything` in this `project`. So, I let's move on to the `next project` and we will learn some more things about `React` in the next project.

# Project 3: UseEffect Example(Counter Again)

## UseEffect

The `useEffect` hook is another `built-in` hook in `React` that is used to perform `side effects` in a functional component. Now, you might be wondering what is a `side effect`?

A `side effect` is anything that is not a `pure` function. A `pure` function is a function that does not have any side effects. For example, a function that `returns a value` is a `pure` function. But a function that `updates the state` or `makes an API call` is not a `pure` function. So, we can say that a `side effect` is anything that is not a `pure` function.

Sooooo, the `useEffect` hook is used to perform `side effects` in a functional component. It takes two arguments:

- The first argument is a `callback` function that is executed after the component is rendered.

- The second argument is an `array` of dependencies that tells `React` when to run the `callback` function.

Enough of the theory. Let's see an example of how to use the `useEffect` hook in a functional component.

```js {.line-numbers}
import React, { useState, useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty array means that the effect will only run once when the component is mounted

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
export default App;
```

Now, start the app and see the console. You should see `Component mounted` in the console. This means that the `useEffect` hook is working and the `callback` function is executed after the component is rendered. But have you noticed something?

The `useEffect` `callback` function is executed twice in the console. Because `component mounted` is printed twice in the console. This is because `React` runs the `useEffect` hook twice in `development mode` to help you find bugs in your code. But in `production mode`, it will only run once. So, don't worry about it.

Let's do a small experiement. Remove the `[]` from the `useEffect` hook and see what happens.

You should see `Component mounted` in the console every time the component is re-rendered. This is because the `useEffect` hook is executed every time the component is re-rendered. The `[]` is an empty array that tells `React` to only run the `callback` function once when the component is mounted.

We can also pass a `state` variable to the `useEffect` hook and every time the state variable is updated, the `callback` function will be executed. So, let's make a simple counter app again but this time we will only have the increase button.

## Remaking the counter app

YOu know the process. Make a new folder named `project_3` in the `projects` folder and add a new file named `Counter.jsx` in the `project_3` folder. And then, add the following code to the `Counter.jsx` file:

```js {.line-numbers}
// projects/project_3/Counter.jsx
import React, { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
  });

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
        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
```
> Now, import the `Counter` component in the `App.jsx` file and render it in the `App` component.

```js {.line-numbers}
// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./projects/project_3/Counter"; // importing the Counter component

function App() {
  return (
    <div className="container">
      <Counter /> {/* rendering the Counter component */}
      {/* <Todo /> */}
    </div>
  );
}
export default App;
```

Now start the development server with `npm run dev` and see the output in the browser. You should see a counter that increases when you click the `increase` button. And you should also see `Counter updated` in the console every time you click the button.

Time to do another experiment.

### Infinite loop

Call the `increase` function inside the `useEffect` hook and see what happens. 

```js {.line-numbers}
// projects/project_3/Counter.jsx
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
    increase(); // calling the increase function inside the useEffect hook
  });

  return (
    ... // everything else is the same
  );
};

export default Counter;
```

This should blank the screen and you should see an `error` in the console saying `Maximum update depth exceeded` or something like that. 

This is because the `useEffect` hook is executed every time the component is re-rendered and when we call the `increase` function inside the `useEffect` hook, it updates the state and causes the component to re-render again and again and again and again. This causes an infinite loop and the component keeps re-rendering until the maximum update depth is exceeded. 

Not gonna lie, this scenario is waay too common in `React` and you will face this issue a lot. So, that's why we can add a `dependency` array to the `useEffect` hook to tell `React` when to run the `callback` function. And if we keep the dependency array empty, the `callback` function will only run once when the component is mounted. So, let's just add an empty array to the `useEffect` hook and see what happens.

```js {.line-numbers}
// projects/project_3/Counter.jsx
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
    increase(); // calling the increase function inside the useEffect hook
  }, []); // empty array means that the effect will only run once when the component is mounted

  return (
    ... // everything else is the same
  );
};

export default Counter;
```
> Now, when you start the development server and see the output in the browser, you should see `Counter updated` in the console twice and the counter should be increased by `2` and not `1`. Like I said before, the `useEffect` hook is executed twice in `development mode` to help you find bugs in your code. But in `production mode`, it will only run once. So, don't worry about it.

This `empty array` is the `dependency array` that tells `React` when to run the `callback` function. And when it's empty, the `callback` function which has the `side effect` will only run once when the component is mounted or render for the first time. 

Inside the `dependency` array, we can also add `state` variables and when the state variable is updated, the `callback` function will be executed.

So,  `empty == only run once when the component is mounted` and `with state variable == run every time the state variable is updated`.

Now, I hope you guys understand one of the use cases of the `useEffect` hook. As this was a example of accidentally creating an infinite loop I will go back to the `Counter` app and remove the `increase` function from the `useEffect` hook. And I will also add a `console.log` statement to the `increase` function to see when it is called.

```js {.line-numbers}
// projects/project_3/Counter.jsx
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    console.log("Increase function called"); // this will run every time the increase function is called
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
  }, []); // empty array means that the effect will only run once when the component is mounted

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
        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

## Multiple Side Effects

Like I said before, the `useEffect` hook takes two arguments. The first argument is a `callback` function that is executed after the component is rendered. And the second argument is an `array` of dependencies that tells `React` when to run the `callback` function.

So, by theory we can say that if we now put the `count` variable in the `dependency` array, the `callback` function will be executed every time the `count` variable is updated. So, let's do that.

```js {.line-numbers}
// projects/project_3/Counter.jsx
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    console.log("Increase function called"); // this will run every time the increase function is called
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
  }, [count]); // empty array means that the effect will only run once when the component is mounted

  return (
    ... // everything else is the same
  );
};

export default Counter;
```

> I hace added the `count` variable to the `dependency` array. 

Now, go to the server and open the console. Let's test it out. You should see `Counter updated` in the console every time you click the `increase` button or the `count` variable is updated. And now you can see that the `useEffect` hook is executed every time the `count` variable is updated. This is because we added the `count` variable to the `dependency` array. So, when the `increase` function is called, the `count` variable is updated and the `useEffect` hook `detects` that the `count` variable is updated and executes the `callback` function.

But now the question is, what if we had 2 `counters` each with their own `side effects`? How can we do that?

### Setting up the second counter

So, let's set up the second counter inside the `Counter` component. We can just copy the `Counter` component and change the name of the `state` variable to `count2` and the `increase` function to `increase2`. And we can also change the `id` of the second counter to `2`. So, let's do that.

```js {.line-numbers}
// projects/project_3/Counter.jsx
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable
  const [count2, setCount2] = useState(0); // second counter variable

  const increase = () => {
    console.log("Increase function called"); // this will run every time the increase function is called
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  const increase2 = () => {
    console.log("Increase2 function called"); // this will run every time the increase2 function is called
    setCount2((prevState) => prevState + 1); // function to increase the second counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
  }, [count]); // empty array means that the effect will only run once when the component is mounted

  useEffect(() => {
    console.log("Counter2 updated"); // this will run every time the component is re-rendered
  }, [count2]); // empty array means that the effect will only run once when the component is mounted

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
        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>

      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count2}
      </h1>

      <div className="mt-1">
        <button className="btn btn-primary mx-2" onClick={increase2}>
          increase2
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

> Now, we have two counters with their own `side effects`. The first counter is `count` and the second counter is `count2`. And we have two `increase` functions to increase the counters.

Now, start the development server and see the output in the browser. 

You should see two counters with their own `increase` buttons. And when you click the `increase` button, you should see `Counter updated` in the console and when you click the `increase2` button, you should see `Counter2 updated` in the console and even though `re-renders` are happening for both the counters, the `useEffect` hook is executed only for the counter that is updated. 

This is the power of the `useEffect` hook. We can define `isolated` side effects for each `state` variable and we can also define multiple `side effects` for the same `state` variable. And they will not interfere with each other. We can do a lot of cool things with this `useState` and `useEffect` combination. 

# Fetching data with useEffect Project

WEll well well, you've made it this far. No way I'm going to let you go without doing a little bit of data fetching. This is the part that will stay with you forever and this is the main basis of `React` and `web development in general`. So, let's learn how to fetch data in react using the `useEffect` hook by doing this simple `user's list project`.

## Setting up the project

We will start as usual. Create a new folder named `project_4` in the `projects` folder and add a new file named `Users.jsx` in the `project_4` folder and let's start by creating a simple `Users` component that will only show a `h1` tag with the text `Users List`. 

```js {.line-numbers}
// projects/project_4/Users.jsx
import React from "react";

const Users = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-center text-primary display-1">Users List</h1>
    </div>
  );
};
export default Users;
```

Now, we can `import` the `Users` component in the `App.jsx` file and render it in the `App` component. So, let's do that.

```js {.line-numbers}
// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Users from "./projects/project_4/Users"; // importing the Users component

function App() {
  return (
    <div className="container">
      <Users /> {/* rendering the Users component */}
      {/* <Counter /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
```

Now, start the development server and see the output in the browser. You should see a huge `Users List` in the center of the screen. Now, we can start making the structure of the `Users` component. 

### Using dummy data 

Before fetching we will make the app with dummy data and see if every-thing works fine. So, let's create some dummy data. 


Now let's think about what info about the user do we want in this users list. I want 3 attributes for each of the users,

- `Name`
- `Email`
- `Porfile image`

I can set random names for the users and random email addresses. And I can set the `profile image` as the `svg` avater we made in `Landing Page` project we did for the `part 1(react fundamentals)` of this course. 

So, I copied the `svg` avatar from the `Landing Page` project and pasted it in the `project_4` folder. And I named it `av.svg`. And now I will create a new file named `dummyData.js` in the `project_4` folder and add the following code to it:

```js {.line-numbers}
// projects/project_4/dummyData.js
import av from "./av.svg"; // importing the svg avatar
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    image: av,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@doe.com",
    image: av,
  },
  {
    id: 3,
    name: "Jack Ripper",
    email: "jack666@reaper.com",
    image: av,
  },
]

export default dummyData; // exporting the dummy data
```

> I have created an array of objects with the `id`, `name`, `email` and `image` attributes. And I have set the `image` attribute to the `svg` avatar we made in the `Landing Page` project.

Now, let's go to the `Users` component and import the `dummyData` array and render it in the `Users` component. 

```js {.line-numbers}
// projects/project_4/Users.jsx
import React from "react";
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

const Users = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-center text-primary display-1">Users List</h1>
      <div className="d-flex flex-column align-items-center gap-3 mt-5">
        {dummyData.map((user) => {
          return (
            <div
              key={user.id}
              className="card d-flex flex-row justify-content-between align-items-center gap-3 p-3 shadow-sm w-100"
            >
              <img
                src={user.image}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="d-flex flex-column">
                <h5 className="text-primary">{user.name}</h5>
                <p className="text-secondary">{user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
```

Now, we have a small `Users` component that renders the `dummyData` array. We are using the `map` method to iterate over the `dummyData` array and render each user in a card. And we are using the `key` prop to give each user a unique key.

But this looks a little bit boring. I want to add a button to create a illusion of loading. 

The idea is there will be button called `load users` and when we click on it, the `dummyData` will be rendered in the `Users` component. Let's see how we can do that.

### Adding the load users button
So, let's add a button below the `Users List` heading and style it with `bootstrap` classes. And we will also add a `loading` state variable to show the loading state of the users list. 

```js {.line-numbers}
// projects/project_4/Users.jsx
import React, { useState } from "react";
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

const Users = () => {
  const [loading, setLoading] = useState(false); // loading state variable
  const [users, setUsers] = useState([...dummyData]); // users state variable

  const loadUsers = () => {
    setLoading(true); 
  } // function to load the users

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-center text-primary display-1">Users List</h1>
      <button
        onClick={loadUsers}
        className="btn btn-primary mt-3"
      >
        Load Users
      </button>
      <div className="d-flex flex-column align-items-center gap-3 mt-5">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="card d-flex flex-row justify-content-between align-items-center gap-3 p-3 shadow-sm w-100"
            >
              <img
                src={user.image}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="d-flex flex-column">
                <h5 className="text-primary">{user.name}</h5>
                <p className="text-secondary">{user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
```

We made two new state variables. One is `loading` and the other is `users`. The `loading` state variable is used to show the loading state of the users list and the `users` state variable is used to store the users list.

Now you should see a button right below the `Users List` heading. And also the `users` list should be rendered below the button. But we need to add a little bit of logic to show the loading state of the users list. So, let's do that.

So, what can be the logic to show the loading state of the users list?

- We can just use a simple `if` statement to check if the `loading` state variable is `true`. If it is `true`, we can just render the `users` list. If it is `false`, we can just render the `load Users` button.

```js {.line-numbers}
// projects/project_4/Users.jsx
import React, { useState } from "react";
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

const Users = () => {
  const [loading, setLoading] = useState(false); // loading state variable
  const [users, setUsers] = useState([...dummyData]); // users state variable

  const loadUsers = () => {
    setLoading(true); 
  } // function to load the users

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center text-primary display-1">Users List</h1>
        <div className="d-flex flex-column align-items-center gap-3 mt-5">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="card d-flex flex-row justify-content-between align-items-center gap-3 p-3 shadow-sm w-100"
              >
                <img
                  src={user.image}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="d-flex flex-column">
                  <h5 className="text-primary">{user.name}</h5>
                  <p className="text-secondary">{user.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  else {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center text-primary display-1">Users List</h1>
        <button
          onClick={loadUsers}
          className="btn btn-primary mt-3"
        >
          Load Users
        </button>
      </div>
    );
  }
};

export default Users;

```

> As the component will re-render when the `loading` state variable is updated, the check will be done again and the `users` list will be rendered.

Now let's see if our logic is working. 

IT WORKSSSS!!??? YEEEEEE BABYYYYY!!!

I got little too excited there, didn't I? All's good now...

Let's get going. 

We have a functioning `load users` button that loads the users list when we click on it. Now, time to start fetching the data from the API.

## Fetching data from the API

First we need to know what is an `API`. Simplely, it's a `javaScript object` that has a `link` to the data we want to fetch. Now going to go any deeper now, you'll have a better understanding of it when we start fetching the data.

Time for the main event. We will fetch the data and load it in the `Users` component.

But where will we find the `API`?

That is a good question. There are many `free APIs` specially from `github` that you can use to fetch data. Visit [github API](https://docs.github.com/en/rest/quickstart?apiVersion=2022-11-28) to see the list of APIs you can use.

There is a `users API` that we can use to fetch the users list. The API is `api.github.com/users`. This API will return a list of users with a lot of information about the users. You can find all the info about the users in the [API documentation](https://docs.github.com/en/rest/reference/users#list-users).

Now, go to the `api.github.com/users` and you should see a list of users objects. Nothing too fancy. 

The data should look like this:

```json
[
  {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  },
  ...
]
```

Each object has a lot of information about the user. But we need only some of the information(`login`, `id`, `avatar_url`, `html_url`) to render the users list. 

So, let's get this list of users and render it in the `Users` and load it in the `console`.

### Fetching the data

To fetch the data we need to send a `GET` request to the API link and there is a built-in `fetch` method in `JavaScript` that we can use to fetch the data. But the syntax of the `fetch` method can be a little bit tricky and hard to understand. So, I'll use another library called `axios` to fetch the data.

> Axios is a promise based HTTP client for the browser and node.js. It is a simple and easy to use library to fetch data from the API. You can find the documentation of `axios` [here](https://axios-http.com/docs/intro).

Stop the development server and install `axios` using the following command:

```bash
npm install axios
```

Now, start the server again and let's import `axios` in the `Users` component and use it to fetch the data from the API.

```js {.line-numbers}
// projects/project_4/Users.jsx
import React, { useState } from "react";
import axios from "axios"; // importing axios
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

... // everything else is the same
```

### Fetching the data with axios

axios has a `get` method that we can use to send a `GET` request to the API. The `get` method takes the API link as an argument and returns a promise. What is a promise, you ask? I have no idea. I just know that is a way to handle asynchronous operations in JavaScript.

#### Promise

A `promise` is an `object` that `represents the eventual completion (or failure) of an asynchronous operation and its resulting value`. 

Let's say you ordered a pizza. The pizza is the `promise` and the `pizza delivery guy` is the `asynchronous operation`. Now, the pizza delivery guy will take some time to deliver the pizza. So, when you order the pizza, you get a `promise` that the pizza will be delivered to you. But it may take some time. So, when the pizza is delivered to you, the `promise` is `resolved` and you get the pizza. But if the pizza delivery guy gets into an accident or something happens and he doesn't deliver the pizza, the `promise` is `rejected` and you don't get the pizza.

It's a `placeholder` for the `value` that will be `returned` in the future. So, when the `promise` is `resolved`, you get the `value` and when the `promise` is `rejected`, you get an `error`.

There are three states of a `promise`:

- `Pending`: The initial state of the promise. The promise is still being processed and the value is not yet available.
- `Fulfilled`: The promise is resolved and the value is available. The pizza is delivered to you.
- `Rejected`: The promise is rejected and the value is not available. The pizza is not delivered to you.

Assssss, we are all beginners here(including myself) and we don't know what the hell is going on. So, let's do some practice coding and see how the `promise` works in real life.

Try out these examples in the `test.js` file and see how the `promise` works.

```js {.line-numbers}
// test.js
// pending and fulfilled example
import axios from "axios";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pizza delivered");
  }, 2000);
});

try {
  const result = await promise;
  console.log(result);
} catch (error) {
  console.log(error);
}
```

> Here i used the `promise` constructor to create a new `promise` and I used the `setTimeout` method to simulate the `asynchronous operation`. 

> The `setTimeout` method takes a callback function and a time in milliseconds as arguments. The callback function will be executed after the time is up. 

> Resolve is a method of the `promise` object that is used to resolve the promise and return the value. 

Here the `promise` is `pending` and after 2 seconds the `promise` is `resolved` and the value inside the `resolve` method is returned.

When the `promise` is `resolved`, the `result` variable will have the value of the `promise` and this way the `promise` is `fulfilled`.

```js {.line-numbers}
// test.js
// rejected example
import axios from "axios";

const url = "https://api.github.com/user";

try {
  const result = await axios.get(url);
  console.log(result);
} catch (error) {
  console.log(error);
}
```
> Here I used the `axios` library to send a `GET` request to the API. The `get` method takes the API link as an argument and returns a promise.

The `url` is the API link which is `https://api.github.com/user`(it has a syntax error). So, when we send a `GET` request to the API, the `promise` is `pending` and when the API returns a response, the `promise` is `fulfilled` and the value is returned. But if there is an error in the API or the API is not found, the `promise` is `rejected` and the error is returned.
