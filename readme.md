So React Js is a very popular Javascript library.

Let's learn ।।।

For those who have knowledge of `Javascript`, it will be very easy for them.

For those who don't have knowledge of `Javascript`, first learn the basics of `Javascript`, then learning `React Js` will be very easy for you.

I assume you have some knowledge of the basics.

Here I have provided you with some

- [links](https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLHiZ4m8vCp9MJDyVrtSFBY0zjIwGw_8sG)

Let's get started ।।।

# Why Learn `React Js`?

With `React Js`, you can easily build a web application.

`React Js` is currently a very popular web development framework. It was created by a Facebook engineer named Jordan Walke in 2011. Since then, it has become very popular.

If you want to use a framework for web development, you can use `React Js`.

If you want to use a framework for mobile application development, you can use `React Native`.

‍‍‍‍‍‍‍‍‍

# Installation

If you don't have `Node Js` installed on your computer, you first need to install `Node Js`.

If you want to install `Node Js`, you can do so from this [link](https://nodejs.org/en/).

After that, you need to check if `Node Js` has been installed on your computer.

If you use the terminal, you need to run the following command:

```bash
node -v
```

if you use `windows` then you need to run the following command:

```bash
node --version
```

> after running the command you will see the version of `Node Js` installed on your computer.

I am using `Node Js` version `v21.0.0`.

Now, let's install `React Js`.

Before that, you need to check if `NPM` is installed on your computer.

> After installing `node js`, `NPM` will be installed on your computer.

To check the version of `npm`, you need to run the following command:

```bash
npm -v
```

if you use `windows` then you need to run the following command:

```bash
npm --version
```

> After running the command, the version you see is the version of `NPM` installed on your computer.

I am using `NPM` version `10.2.0`.

Now, let's install `React Js`.

First, you need to create a folder. Then, navigate to that folder. Once inside the folder, you need to open the `command prompt` or `terminal`. I will explain how to do that.

If you are using `Windows`, you need to go to the search bar and type `cmd`, then press enter. This will open the `command prompt` on your computer.

If you are using a `Mac`, you need to go to `spotlight`, type `terminal`, then press enter. This will open the `terminal` on your computer.

If you are using `Linux`, you need to open the `terminal` within the folder by right-clicking and selecting `open in terminal`.

Now, you need to run the following command:

```bash
npx create-react-app my-app
```

After running the command, a folder named `my-app` will be created in your directory. All the files for `React Js` will be installed in that folder.

Now, you need to run the following command:

```bash
cd my-app
```

After running the command, you will navigate to the folder where you have gone.

Now, you need to run the following command:

```bash
npm start
```

You will need to wait for a moment. After running the command, a website will open in your browser, where you will see the default page of `React Js`.

## Congratulations 🎉🎉🎉

### You have successfully installed `React Js`.

#### Now, let's go inside the folder for a bit.

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── setupTests.js
```

> You will see your folder like this, or there might be some slight changes.

There's nothing to be afraid of. If you make a mistake, you can start over.

I won't go into too much explanation for now. Your first task is to go inside the `src` folder. You can delete all the files that are inside it and create a new file named `index.js`.

Now, when it comes to coding,

# Text Editor and Making The First Component

If you have a text editor you prefer to use, you can go ahead with that. I'll provide you with the names of some text editors that you can use.

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)
- [Brackets](http://brackets.io/)
- [Notepad++](https://notepad-plus-plus.org/)

I have provided a link here from where you can download a text editor of your choice. You can use whichever you prefer. However, I would suggest using `Visual Studio Code`. It's very user-friendly, highly popular, and a powerful text editor.

- [Download Visual Studio Code](https://code.visualstudio.com/download)

After downloading `VS Code`, you need to install it. Once it's installed, you can start using it.

To properly install `VS Code`, you can watch this [video tutorial](video_link_here).

- [How to Install Visual Studio Code on Windows 10](https://www.youtube.com/watch?v=fJEbVCrEMSE)
- [How to Install Visual Studio Code on Linux(Ubuntu)](https://www.youtube.com/watch?v=ChwsFldra-o)

After installing `VS Code`, you can open your `my-app` folder and navigate inside it. To open the folder in `VS Code`, you can right-click on the folder and select `Open with Code`. This will open your folder in `VS Code`.

Once you have opened your folder in `VS Code`, you can navigate inside it. Inside the folder, you should go to the `src` folder and open the `index.js` file. Now, you can start coding.

Before that, you should be familiar with some basic commands in `VS Code`. I'm providing you with some commands that you can use:

- `Ctrl + Shift + P`: This command allows you to perform various tasks.
- `Ctrl + P`: This command allows you to search for files.
- `Ctrl + Shift + N`: This command allows you to create a new file.
- `Ctrl + Shift + W`: This command allows you to close the currently open file.
- `Ctrl + S`: This command allows you to save the currently open file.
- `Ctrl + Shift + S`: This command allows you to save the currently open file with a new name.
- `Ctrl + /`: This command allows you to comment or uncomment a line of code.
- `Ctrl + ~`: This command allows you to open the integrated terminal in `VS Code`.

Now, let's move on to the last command. `Ctrl + ~` will start the integrated terminal in `VS Code`. So, you won't need to manually open the terminal every time. You can open it whenever you want. Additionally, the terminal will automatically open in the folder where you are currently located.

Since you are in the `my-app` folder, the terminal will open in that folder, and you can now enter the following command in the terminal.

```bash
npm start
```

এAfter running this command, a website will open in your browser. However, you will see many errors because you have deleted all the files in the `my-app/src` folder as per my instructions, and you haven't written any code yet. So, the file you have open doesn't contain any code, which is why you're seeing a lot of errors. Now, you need to write some code.

I'm providing you with some code snippets that you can copy and paste into your `my-app/src/index.js` file.

```js
// importing the react library
import React from "react";
import { createRoot } from "react-dom/client";

// creating a react component to render to the DOM
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

// rendering the component to the DOM
const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

Once you write this code and save it, you will see "Hello World" in your browser on the website that opened. If you make any changes, the website in your browser will automatically reload, and you will see the changes you made.

For now, you don't need to understand what the code does. However, you need to follow some rules:

- The file you have open is named `index.js`. You cannot change the name of this file.
- The function `const App = () => {}` is called a `React Component`.

Inside this `React Component`, you can write any JavaScript code. You can also give any name to a `React Component`, but you cannot change the name of this `React Component`. If you do, you will see a lot of errors.

In `React JS`, we create `React components` like this.

Before finishing, I want to mention one more important thing. The name of a `React Component` should always start with a capital letter, and it should be in `PascalCase`. For example:

```js
// correct way to write a react component name
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

// wrong way to write a react component name
const app = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
```

# Advanced

## First Project

Now let's talk about some advanced topics.

We will create a project here. Since we are going to create a project, we need to create a folder.

I've named my folder `my-project`, but you can give it any name you want. You need to go inside this folder.

Now, open this folder with `Vs Code`. Once you're inside this folder, you'll need to open the command prompt or terminal.

So, in the terminal, type:

```bash
npx create-react-app books
```

This will create another folder named `books` inside your `my-project` folder. All the files for `React Js` will be installed in that folder.

```bash
cd books
```

এবং

```bash
npm start
```

so we will follow the same steps again and delet all the files inside the `src` folder and create a new file named `index.js`.

```js
// importing the react library
import React from "react";
import { createRoot } from "react-dom/client";

// creating a react component to render to the DOM
const App = () => {
  // JSX
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
};

// rendering the component to the DOM
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// <App /> is called self closing tag
```

If you stay as you are, your default browser will open automatically, and you will see the word `Books` on that website.

Now let's move on to the `Main PART`.

I will try to create a website similar to the one below in this project and at the same time, I will make an effort to learn the complete `fundamentals` of `React js`.

![books](<extras/Screenshot from 2023-10-23 12-24-15.png>)

- https://www.amazon.com/Best-Sellers-Books/zgbs/books

# Extentions

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

this extention will help you to debug your react application.

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

this will help you to format your code.

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Auto rename tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

# Making the palceholders

```js
// importing the react library
import React from "react";
import { createRoot } from "react-dom/client";

// creating a react component to render to the DOM
const App = () => {
  return (
    <div>
      {/* image section */}
      <h1>Image</h1>
      {/* title section */}
      <h2>Title</h2>
      {/* author section */}
      <h3>Author</h3>
    </div>
  );
};

// rendering the component to the DOM
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// <App /> is called self closing tag
```

lets break it down

```js
const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

Try to understand what this means.

If you carefully look inside your `books` folder, you will find a folder named `public`. Inside that folder, there is a file named `index.html`. Click on the file and observe it closely.

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>
```

`<div id = "root"></div>` is our most important tag.

Through `root.render()`, we can render our `React Components` inside this `<div id = "root"></div>`.
So, we can say that all the `Components` we create are essentially inside this `<div id = "root"></div>`.

And `const root = createRoot(document.getElementById('root'));` is what we are doing. Through this code, we are specifying that our `React Components` will render within the `<div id = "root"></div>`.

From here, we will follow some rules.

- The name of each `React Component` will be in `PascalCase`, and the name of each `React Component` will start with a capital letter.
- Each `React Component` must return exactly one `JSX`. (`JSX` is like `HTML tags`)

```js
const Component = () => {
  return (
    // div is the jsx element
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
```

- Here we will refer to `div` as the `parent` and `h1` as the `child`. And all the `child` elements inside the `parent` will be rendered together.

```js

// right component
const Component = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Hello World</h2>
            <h3>Hello World</h3>
        </div>
    )
}

// wrong component
const Component = () => {
  //Multiple parent jsx elements
    return (
        <div>
            <h1>Hello World</h1>
        </div>
        <div>
            <h2>Hello World</h2>
        </div>
        <div>
            <h3>Hello World</h3>
        </div>
    )
}
```

# Making the Components for the PlaceHolders

in your `books/src/index.js` file

```js
....

// image component
const Image = () => {
  return (
    <div>
      <h1>Image</h1>
    </div>
  );
};

// title component
const Title = () => (<h2>Title</h2>);

// author component
const Author = () => {
  return (
    <div>
      <h3>Author</h3>
    </div>
  );
};

....
```

- Here, you can see that I have created three components and created functions for the three components.
  Such functions are called `Arrow Functions`.

  Inside these `Arrow Functions`, we have written some `JSX`.

  Among the three functions, the `Title` function is written a bit differently. And we have written this function in a single line. This is our special function. This type of function is called an `Implicit Return`. It means that inside this function, we can write what we want to return in a single line.

Now, let's render these three components inside our `App` component.

```js
// importing the react library
import React from "react";
import {createRoot} from 'react-dom/client';

// creating a react component to render to the DOM
const App = () => {
  return (
    <div>
      {/* image section */}
      <Image />
      {/* title section */}
      <Title />
      {/* author section */}
      <Author />
    </div>
  );
};

// image component
const Image = () => {
  return (
    <div>
      <h1>Image</h1>
    </div>
  );
};

....
```
Now, if you go to your browser, you will see that you can view a website and on the website, you can see three words: `Image`, `Title`, and `Author`.

However, this is not helping us much. So, we will create another component named `Book`, and inside this component, we will render all of our components.


# Nesting components

```js
....
const App = () => {
  return (
    <div>
      {/* book section */}
      <Book />
    </div>
  );
};



// book component
const Book = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  );
}

....
```
Through `Component nesting`, we can render one component inside another, as we have done here.

Inside the `Book` component, we can render all of our components. And we can render this `Book` component inside the `App` component.

Now, if we want, we can create copies of the same book.


```js
....
const App = () => {
  return (
    <div>
      {/* book section */}
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};
....
```

![books](<extras/Screenshot from 2023-10-23 15-31-10.png>)

lets copy and paste

```js
....
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);

// title component
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};

// author component
const Author = () => <h4>Jordan Moore </h4>;
....
```
# CSS Styling

In `books/src` folder make a file names `index.css` and in that


```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f1f5f8;
  color: #222;
}
```

Now we need to import this `index.css` file in our `index.js` file.

```js
// importing the react library
import React from "react";
import {createRoot} from 'react-dom/client';
// importing the css file
import './index.css'

...
```

now we can apply those styllings

```js
....
import './index.css';

function App() {
  return (

    <section className='booklist'> {/* booklist is the class name */}
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'> {/* book is the class name */}
      <Image />
      <Title />
      <Author />
    </article>
  );
};
....
```

lets go to the `index.css` file and add some more stylling


```css
....
/* Styles for the booklist container */
.booklist {
  width: 90vw; /* Set the width to 90% of the viewport width */
  max-width: 1170px; /* Set the maximum width to 1170px */
  margin: 5rem auto; /* Add a margin of 5rem on top and bottom, and auto on left and right */
  display: grid; /* Use CSS grid for layout */
  gap: 2rem; /* Add a gap of 2rem between grid items */
}

/* Styles for individual books */
.book {
  background: #fff; /* Set the background color to white */
  border-radius: 1rem; /* Add a border radius of 1rem */
  padding: 2rem; /* Add 2rem of padding */
  text-align: center; /* Center the text */
}

/* Styles for book cover images */
.book img {
  width: 100%; /* Set the width to 100% */
  object-fit: cover; /* Scale the image to cover the entire container */
}

/* Styles for book titles */
.book h2 {
  margin-top: 1rem; /* Add a margin of 1rem on top */
  font-size: 1rem; /* Set the font size to 1rem */
}

/*
 * This media query targets screens with a minimum width of 768 pixels.
 * It sets the grid-template-columns property of the .booklist class to repeat 3 columns with equal width.
 * This creates a responsive layout for the booklist, with 3 columns on larger screens.
 */
@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
```


If look look at the stylling and if you have done this all accordingly you should se something like this in the browser.
![books](<extras/Screenshot from 2023-10-24 15-57-49.png>)

If will be a responsive static page with 4 same books and some styling. Try making the browser screen smaller and you should see something like this.

![books](<extras/Screenshot from 2023-10-24 16-03-10.png>)

Now go to `index.js` and have a look at the image component.

```js
....
// image component
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);
....
```

here the `src` attribute of the `img` tag is a `url` of an image. We can use this `url` to get the image from the internet. But we can also use a local image.

# Local Images

SOoooooo, We need to make a folder in our `books/public` folder and name it `img`. And we need to put our image in that folder.

So download the image from the internet and put it in the `image` folder.

then, go to `index.js` and edit the image component as follows.

```js
....
const Image = () => (
  <img
    src="./images/book_1.jpeg" // here we are using a local image
    alt="Interesting Facts For Curious Minds"
  />
);
....
```

> Note: If you are using a local image then you need to use `./` before the image path.

Now if you go to the browser you should see the image.

> Note: why we seeing the image even though its not in the same folder?? Its because the `image` folder is the folder where the main `html` file is.. SO, when react is rendered it is really searching in the `public` folder not in `src` folder. And thats also why we made the folder inside the `public` Folder.

to help you with the folders heres the folder stucture of the project up untill now.

```
books
├── public
│   └── image
│       └── book_1.jpeg
|   ....
└── src
    └── index.js
    └── index.css

....
```

So, you should see the image.

# Some CSS Rules

AS you remembered the return `HTML` inside a `Component` is called `JSX`. SO, when we use any `JS or CSS` inside the `JSX` we need to use curly braces. SO, if you used `CSS` stylling before you know that there is a stylling method called `Inline Styling`.

To use `inline stylling` inside the `JSX` we need to use curly braces and make it a `Js object` that has the `style` property in a `key/value` format.

**SOOOOOOO**

```js
const Component = () => (
  return (
    <div style="color: red"> {/* this is wrong */}
      <h1>Hello World</h1>
    </div>
  )
)

const Component = () => (
  return (
    <div style={{ color: red }}> {/* this is right */}
      <h1>Hello World</h1>
    </div>
  )
)
```

We can also use `Inline Stylling` inside the `JSX` as follows.

```js
const Component = () => (
  const InlineStylling = {
    color: red
    padding: '1rem'
  }

  return (
    <div style={InlineStylling}> {/* passing the Inline Stylling as a JS object */}
      <h1>Hello World</h1>
    </div>
  )
)
```

Here we are passing the `InlineStylling` as a JS object we make inside the Component.

SO, lets add some `inline stylling` in our web page.
Go to the `index.js` and add some `inline stylling`

```js
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

SOooooooo, now we have `inline stylling` in our web page.

we, should now try to add `javascript code` in the `JSX`

But first some more **RULES**.

**RULES**

- `{}` means we are going to `Javascript` LAND.

SOOOOOO,

```js
const Component = () => {
  const someValue = "ITVAYA is the best";
  return (
    <div>
      <h1>{6 + 6}</h1>
      <h2>{somevalue}</h2>
      <h3>{someValue.toLowerCase()}</h3>
    </div>
  );
};
```

- anything inside the `{}` is javascript code but they cannot be `statements`.

- The value inside the `{}` is called `expression`. Meaning that it is an `expression` that returns a value. it can be any type of value but must be a value.

so you cannot do the following.

```js
// wrong
const Component = () => {
  return (
    <div>
      <h1>{const x = 6 + 6}</h1>
    </div>
  )
}
```

- You cannot do that because its a assignment operation and not returning anything

SO lets make the `title`, `author` and the `image` of the books a `JS object` and then add them to the `JSX`

```js
....
// javascript object storing the values
const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img = "./images/book_1.jpg";

// creating a react component to render to the DOM
const App = () => {
  return (
    <div className="booklist">
      {/* book section */}
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

// book component
const Book = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  );
};

// image component
const Image = () => (
  <img src={img} alt={title} /> // passing the img and title as a JS object
);

// title component
const Title = () => {
  return <h2>{title}</h2>; // passing the title as a JS object
};

// author component
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>{author}</h4>; // passing the author as a JS object
};
....
```

# Props in React

What are `props`??

`props` are the way we pass data from one `component` to another `component`.

Simply put `props` are the arguments of a `function` that is passed from one `function` to another `function`.

for example:

```js
const Component = (a, b) => {
  return a + b;
};

Component(1, 2); // here 1 and 2 are the props
```

In React we pass `props` from one `component` to another `component` as follows.

```js
const Component = (props) => {
  return (
    <div>
      <h1>{props.name}</h1> {/* here name is the prop given to the component */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Component name="ITVAYA" /> {/* here name is the prop */}
    </div>
  );
};
```

SO, `as you can see props are passed as a key/value pair`. The `key` is the name of the `prop` and the `value` is the value of the `prop`.

There is a key thing to remember. A prop can hold many values and it won't show an error if there is no value in the prop.

Lets do something to the `Book` component to make it more clearer.

```js
....
const App = () => {
  return (
    <div className="booklist">
      {/* book section */}
      <Book job = "developer"/> {/* the job prop is passed hare to the book component */}
      <Book title = "React"/> {/* the title prop is passed hare to the book component */}
      <Book number = "1"/> {/* the number prop is passed hare to the book component */}
      <Book />
    </div>
  );
};

// book component
const Book = (props) => {
  console.log(props) // here we are logging the props to the console
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
      <p>{props.job}</p> {/* here job is the prop */}
      <p>{props.title}</p> {/* here title is the prop */}
      <p>{props.number}</p> {/* here number is the prop */}
    </div>
  );
};
....
```

SO now you can see that the props are passed as a key/value pair.

Now lets create psudo dynamic book component.

```js
....
// first book object containing the values
const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book_1.jpg',
};

// second book object containing the values
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

// creating a react component to render to the DOM
const App = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

// book component
const Book = (props) => { // added props parameter and gets the values from the props object

  return (
    <div className="book">
      <Image img = {props.img} title = {props.title}/>  {/* getting the img and title value from the props object and then passing the title and img to the image component*/}
      <Title title = {props.title} />  {/* getting the title value from the props object and then passing the title to the title component*/}
      <Author author = {props.author} />  {/* getting the author value from the props object and then passing the author to the author component*/}
    </div>
  );
};

// image component
const Image = (props) => (  // added props parameter
  <img src={props.img} alt={props.title} /> // getting the img value from the props
);

// title component
const Title = (props) => {  // added props parameter
  return <h2>{props.title}</h2>; // getting the title value from the props
};

// author component
const Author = (props) => {  // added props parameter
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>{props.author}</h4>; // getting the author value from the props object
};
....
```

I know the example above is massive but the concept is reletively simple. We are just passing the values from one component to another component as props.

we created Two `JS objects` and then passed the values from the `JS objects` to the `Book` component as props.

Then we passed the values from the `Book` component to the `Image`, `Title` and `Author` component as props.

then we used the values in the `Image`, `Title` and `Author` component as we needed.

thats it... Easy right??? NO, its not easy. Its a bit confusing at first but you will get used to it.

React will confuse you often but as we practice we get more and more used to it.

There are other ways to access the `props` in the `component` but this is the most common way to do it.

We can also....

# Destructure the props

```js
const someObject = {
  name: "john",
  job: "developer",
  location: "florida",
};

const Component = (props) => {
  const { name, job } = props; // here we are destructuring the props object
  return (
    <div>
      <h1>{name}</h1> {/* here name is the prop given to the component */}
      <h2>{job}</h2> {/* here age is the prop given to the component */}
    </div>
  );
};

Component(someObject); // here we are passing the someObject as a prop
```

`Destructure` is the way of unpacking a `JS object` into several variables.

In our example case we are unpacking the `props` object into `name` and `job` variables and then using them in the `JSX`

- now we don't need to to `props.name` or `props.job` we can just do `name` and `job

- this method of using props is called `destructuring` and it ruduce time and code.

We can also directly destructure the props in the `parameter` of the `component` as follows.

```js
const someObject = {
  name: "john",
  job: "developer",
  location: "florida",
};

const Component = ({ name, job }) => {
  // here we are destructuring the props object
  return (
    <div>
      <h1>{name}</h1> {/* here name is the prop given to the component */}
      <h2>{job}</h2> {/* here age is the prop given to the component */}
    </div>
  );
};

Component(someObject); // here we are passing the someObject as a prop
```

this method is much faster and cleaner.

# Children Props

`Children props` are the props that are passed between the opening and closing tag of a `component`.

for example:

```js
const Component = () => {
  return (
    <div>
      <h1>Children Props</h1>
      <h2>Children Props</h2>
      <h3>Children Props</h3>
    </div>
  );
};
```

Here the `h1`, `h2` and `h3` are the `children props` of the `div` component.

We can also pass `children props` to our `component` as follows.

```js
const Component = (props) => {
  return (
    <div>
      <h1>{props.children}</h1> {/* here children is the children prop */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Component>Children Props</Component>{" "}
      {/* here Children Props is the children prop */}
    </div>
  );
};
```

Here we are passing the `Children Props` as a `children prop` to the `Component` component.

We can also pass `JSX` as a `children prop` to the `component` as follows.

```js
const Component = (props) => {
  return (
    <div>
      <h1>{props.children}</h1> {/* here children is the children prop */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Component>
        <h1>Children Props</h1> {/* here h1 is the children prop */}
        <h2>Children Props</h2> {/* here h2 is the children prop */}
        <h3>Children Props</h3> {/* here h3 is the children prop */}
      </Component>
    </div>
  );
};
```

Here we are passing the `JSX` as a `children prop` to the `Component` component.

we can use destructuring to get the `children prop` as follows.

```js
const Component = ({ children }) => {
  // here we are destructuring the props object
  return (
    <div>
      <h1>{children}</h1> {/* here children is the children prop */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Component>
        <h1>Children Props</h1> {/* here h1 is the children prop */}
        <h2>Children Props</h2> {/* here h2 is the children prop */}
        <h3>Children Props</h3> {/* here h3 is the children prop */}
      </Component>
    </div>
  );
};
```

if there are multiple props and also a `children prop` then the `children prop` should be the last prop.

```js
const Component = ({ name, job, children }) => {
  // here we are destructuring the props object
  return (
    <div>
      <h1>{name}</h1> {/* here name is the prop */}
      <h2>{job}</h2> {/* here job is the prop */}
      <h3>{children}</h3> {/* here children is the children prop */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Component name="ITVAYA" job="developer">
        {/* here Children Props is the children prop */}
        <h1>Children Props</h1> {/* here h1 is the children prop */}
        <h2>Children Props</h2> {/* here h2 is the children prop */}
        <h3>Children Props</h3> {/* here h3 is the children prop */}
      </Component>
    </div>
  );
};
```

now that we are done with the `props` lets move on to the `lists`

# Lists

`Lists` are the way we render a `component` multiple times.

But there is a problem.

We cannot render objects in `JSX` directly.

You can try it yourself.

```js

....
// first book object containing the values
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
];

const Component = () => {
  return (
    <div>
      <h1>{books}</h1> {/* here books is the prop given to the component */}
    </div>
  );
};
```

this will show a error.

Because in `JSX` we cannot render `objects` directly. Even though er are passing a list, the list contains two objects and react cannot render them directly.

SO, we need another way to render the `objects` in `JSX`.

# Map

`Map` is a `JS` method that is used to render `objects` in `JSX`.

`Map` is a `JS` method that takes a `function` as a parameter and then returns a `new array` with the `function` applied to each element of the `array`.

To simply put, it loops over every element of the `array` and then applies the `function` to each element and then returns a `new array` with the `function` applied to each element.

Lets see an example.

```js
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(newNumbers);
```

Here we have a `numbers` array and then we are using the `map` method to loop over the `numbers` array and then multiply each element by 2 and then return a `new array` with the `function` applied to each element.

So, the `newNumbers` array will be `[2, 4, 6, 8, 10]`

Now, of we use our brains a bit we can see that we can use the `map` method to render the `objects` in `JSX`.

Lets see an example.

```js
// first book object containing the values
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

{
  /* here we are using the map method to loop over the books array and then return a new array with the function applied to each element */
}
const newBookList = books.map((book) => {
  const { author, title, img } = book; // here we are destructuring the book object
  return (
    <Book author={author} title={title} img={img} /> // here we are returning a new array with the function applied to each element
  );
});

const Component = () => {
  return (
    <div>
      <h1>{newBookList}</h1>{" "}
      {/* here newBookList is the prop given to the component */}
    </div>
  );
};
```

Here we are using the `map` method to loop over the `books` array and then return a `new array` with the `function` applied to each element.

Then we are destructuring the `book` object and then returning a `new array` with the `function` applied to each element.

Then we are passing the `newBookList` as a `prop` to the `Component` component.

There another way of doing this instead of creating a `new array` and then passing it as a `prop` to the `Component` component. We can directly use the `map` method inside the `Component` component.

Lets see an example.

```js
// first book object containing the values
const books = [
  ....
];

const Component = () => {
  return (
    <div>
      <h1>
        {
          /* here we are using the map method to loop over the books array and then return a new array with the function applied to each element */
        }
        {books.map((book) => {
          const { author, title, img } = book; // here we are destructuring the book object
          return (
            <Book author={author} title={title} img={img} /> // here we are returning a new array with the function applied to each element
          );
        })}
      </h1>
    </div>
  );
};
```

I know this looks messy but i prefer to use this method to render `object lists` in `JSX`.

SO lets edit our app to use the `map` method to render the `books` array.

```js
....
// books list containing the objects
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book_1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

// creating a react component to render to the DOM
const App = () => {
  return (
    <section className="booklist">
      {/* rendering the booklist directly using the `map` method */}
      {books.map((book) => {
        const { author, title, img } = book;
        return <Book author={author} title={title} img={img} />;
      })}
    </section>
  );
};
....
```

So now we are rendering the `books` list directly without the need of typing the props manually.

Now lets move on to the `key` prop.

# Key Prop

`Key prop` is a `prop` that is used to identify the `component` in the `DOM`.

If you have a look at the consol in the ` browser` you will see a warning.

That is because when you render a `list` of `components` in `JSX` you need to add a `key prop` to each `component`.

so to demonstrate,

```js
const Component = () => {
  //  list of items
  const names = [
    {
      id: 1,
      name: "john",
    },
    {
      id: 2,
      name: "peter",
    },
    {
      id: 3,
      name: "susan",
    },
    {
      id: 4,
      name: "anna",
    },
  ];
  return (
    <div>
      {names.map((name) => {
        return <PropComponent name={name.name} id={name.id} key={name.id} />;
      })}
    </div>
  );
};

const PropComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.id}</h2> {/* here we are using the key prop */}
    </div>
  );
};
```

- The `key prop` should be unique.
- The `key prop` should be a `string` or a `number`.
- its not efficient if the list is ever changing or dynamic.

Sooooo, lets fix the issue in our app,

```js
const App = () => {
  return (
    <section className="booklist">
      {/* rendering the booklist directly using the `map` method */}
      {books.map((book) => {
        const { author, title, img } = book;
        return <Book author={author} title={title} key={book.id} img={img} />; // here we are using the key prop
      })}
    </section>
  );
};
```

Now we are using the `key prop` in our `Book` component.

# Passing the whole Object as a prop

We can also pass the whole `object` as a `prop` to the `component`.

Lets see an example.

```js
const Component = () => {
  //  list of items
  const names = [
    {
      id: 1,
      name: "john",
    },
    {
      id: 2,
      name: "peter",
    },
    {
      id: 3,
      name: "susan",
    },
    {
      id: 4,
      name: "anna",
    },
  ];
  return (
    <div>
      {names.map((name) => {
        return <PropComponent name={name} key={name.id} />;
      })}
    </div>
  );
};

const PropComponent = (props) => {
  return (
    <div>
      <h1>{props.name.name}</h1> {/* here we are using the key prop */}
      <h2>{props.name.id}</h2> {/* here we are using the key prop */}
    </div>
  );
};
```

this method can be problematic sometimes. Because `props` itself is an `Object` and if we pass the whole `object` as a `prop` then we will have to use `props.prop.prop` to access the `prop` value. Which doese not look good.

So we can do is destructure the `prop` object in the `parameter` of the `component` as follows.

```js
const Component = () => {
  //  list of items
  const names = [
    ....
  ];
  return (
    <div>
      {names.map((name)=>{
        return <PropComponent name={name} key={name.id} />
      })}
    </div>
  );
};

const PropComponent = ({name}) => { // here we are destructuring the prop object
  return (
    <div>
      <h1>{name.name}</h1> {/* here we are using the key prop */}
      <h2>{name.id}</h2> {/* here we are using the key prop */}
    </div>
  );
};
```

Now we are destructuring the `prop` object in the `parameter` of the `component` and then using the `prop` as we need. This is much cleaner and faster.

But I prepfer using the `spread operator` to pass the whole `object` as a `prop` to the `component`.

> Note: The `spread operator` is a `JS` operator that is used to spread the values of an `array` or an `object`. it look like this `...`

Lets see an example.

```js
const Component = () => {
  //  list of items
  const names = [
    ....
  ];
  return (
    <div>
      {names.map((name)=>{
        return <PropComponent {...name} key={name.id} /> // here we are using the spread operator to pass the whole object as a prop
      })}
    </div>
  );
};

const PropComponent = (prop) => { // here we are destructuring the prop object
  return (
    <div>
      <h1>{prop.name}</h1> {/* here we are using the key prop */}
      <h2>{prop.id}</h2> {/* here we are using the key prop */}
    </div>
  );
};
```

So, the `spread operator` is used to spread the values of an `array` or an `object`. When i did `{...name}` it spread the values of the `name` object and then passed it as a `prop` to the `component`.

So, i didn't need to destruct the `prop` object in the `parameter` of the `component`. Because its passed as a destructured `prop` object.

# Events

`Events` are the way we interact with the `DOM`.

> Note: `DOM` stands for `Document Object Model`. It is a tree like structure that represents the `HTML` document. It is the way `JS` interacts with the `HTML` document.

In vanilla javascript we use `events` to interact with the `DOM`.

if we make a button in html and then add a `click` event to it then we can do something when the button is clicked.

Lets see an example.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <button onclick="console.log('hello world')">Click Me</button>

    <script>
      const button = document.querySelector("button");
      button.addEventListener("click", () => {
        alert("hello world"); // here we are adding a event listener to the button and then alarting hello world to the console
      });
    </script>
  </body>
</html>
```

Here we are adding a `click` event to the button and then alerting `hello world` to the console.

For `REACT js` the process is a little different.

```js
const Component = () => {
  const clickHandler = () => {
    alert("hello world"); // here we are adding a event listener to the button and then alarting hello world to the console
  };
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>{" "}
      {/* here we are adding a event listener to the button and then alarting hello world to the console */}
    </div>
  );
};
```

We, can simply add a `event listener` to the `button` and then do something when the `button` is clicked.

Lets see another example that is rendered in the `app` component.

```js
....

const App = () => {
  return (
    <section className="booklist">
      <EventExamples /> {/* calling the EventExamples component */}
      {/* rendering the booklist directly using the `map` method */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input"); // funxtion to handle a form input
  };
  const handleButtonClick = () => {
    alert("handle button click"); // function to handle a button click
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        {/* adding a form */}
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
....
```

Here we are adding a `form` and then adding a `event listener` to the `form` and then doing something when the `form` is submitted.

# Form handling

There are many ways and methods to handle a `form` in `react js`. Easiest would be:

- `onClick` event on the `submit` button
- `onChange` event on the `input` field
- `onSubmit` event on the `form` tag

lest do some modification in our `EventExamples` component.

```js
....
const EventExamples = () => {
  const handleFormInput = (e) => { // here we are passing the event object as a parameter
    console.log(e.target.value); // here we are logging the value of the input field
    console.log("handle form input"); // funxtion to handle a form input
  };

  const handleButtonClick = () => {
    .....
  );
  return (
    ....
  );
};
....
```

> By adding the `e` parameter we are passing the `event object` to the `handleFormInput` function. and we can access the value of the input field by doing `e.target.value`. we can also do `e.target.name` to get the name of the input field and `e.target.type` to get the type of the input field.

This way we can get the value of a input fields.

now lets a button to submit the form.

```js

const EventExamples = () => {
  const handleFormInput = (e) => {
    ....
  };

  const handleButtonClick = () => {
    ....
  );
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button> {/* here we are adding a button with type submit */}
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

So, here we just added a `button` with `type="submit`. This will submit the form so try and see what happens.

You should see the details of the `input field` in the `URL` of the `browser`. that s the default behaviour of the `form` tag which is very annoying and can reveal sensitive information.

SO we can fix that so,

```js

const EventExamples = () => {
  const handleFormInput = (e) => {
    ....
  };

  const handleButtonClick = () => {
    ....
  );

  // handling the form submission
  const handleFormSubmission = () => {
    console.log('form submitted');
  };


  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}> {/* here we are adding the onSubmit event handler */}
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

```

Here we are adding the `onSubmit` event handler to the `form` tag and then doing something when the `form` is submitted, meaning when the `submit` button is clicked, the `form` will be submitted and then the `handleFormSubmission` function will be called.

But we will see nothing in the consol because of the default behaviour of the `form` tag.

there is a way to bypass that , we just need to add another line inside the `handleFormSubmission` function.

```js
...
  const handleFormSubmission = (e) => { // adding the event listener
    e.preventDefault(); // adding the preventDefault method to stop the default behaviour of the form
    console.log('form submitted');
  };
...

```

and now we will not see the default behaviour of the `form` tag and see the output in the consol.

**OK** Now that we saw how we can handle a `form` in `react js` there some methos and some basic thought that we can rest out.

## thought 1

We can use `anonymous functions` to handle `events` in `react js` without the need of creating a `function` and then calling it.

```js
const EventExamples = () => {
  return (
    <section>
      <button onClick={() => console.log("hello there")}>click me</button>
    </section>
  );
};
```

## thought 2

We can do one-liners in `react js` for faster and cleaner code.

```js
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={() => console.log("you clicked me")}>click me</button>
    </section>
  );
};
```

## thought 3

Lets clear the `EventExamples` component cpmpletely because it is not related to the `app` component.

Now we can test if the `components` are independent or not.

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  );
};
```

you should try clicking the button and look in the consol if you have different `titles` showing or not. this means that the `components` are independent of each other.

**delet** the button.

# Prop Drilling

This is the anoying part of `react js`. `Prop Drilling` is the process of passing `props` from one `component` to another `component` to another `component` and so on.

So, lets say we have a `grandparent` component in our case it's the `app` and then we have a `parent` component and then we have a `child` component and so on.

So, if we want to add a prop to the `child` component from the `grand parent` component we have to go through thw `parent` component too.

Lets see an example.

```js
....

const App = () => {
  const someText = "Some Text"; // the text

  // a function to show the text
  const aFunctionToShowTheText = () => {
    console.log(someText);
  };

  return (
    <section className="booklist">
      {/* rendering the booklist directly using the `map` method */}
      {books.map((book) => {
        return (
          <Book
            {...book}
            key={book.id}
            aFunctionToShowTheText={aFunctionToShowTheText}
          />
        ); // here we are passing the function as a prop
      })}
    </section>
  );
};

// book component
const Book = (props) => {
  // added props parameter and gets the values from the props object

  return (
    <div className="book">
      <Image img={props.img} title={props.title} />
      <Title title={props.title} />
      <button onClick={props.aFunctionToShowTheText}>Show Text</button>{/* getting the aFunctionToShowTheText value from the props object and then passing it to the button component*/}
      <Author author={props.author} />{" "}
    </div>
  );
};
....
```

as you can see we are passing the `aFunctionToShowTheText` function as a `prop` to the `Book` component and then passing it to the `button` component.

we directly cannot pass the `aFunctionToShowTheText` function to the `button` component from the `app` component. We have to pass it to the `Book` component first and then pass it to the `button` component.

This is called `prop drilling` and it is very annoying.

But it gets more annoying

lets see some examples..

## example 1

so, there can be a unexpected bug while passing a functionas a prop that has a parameter.

So, to see the bug,

- create a `function` in the app component with a parameter.
- pass the function as a prop to the `Book` component.
- in the button add the function as a `event listener` and then pass a parameter to the function.

```js
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

Here we are passing the `getBook` function as a `prop` to the `Book` component and then passing it to the `button` component and then calling the function with a parameter. But it should work when we click the button but it does not. It starts without even clicking the button.

it happened because we are calling the function directly in the `button` component. So, the function is called when the `button` component is rendered. SO it doesn't matter if you press the button or not the function will be called.

So, the solution would be to

- create a `wrapper` for the `getBook` function and then pass it to the `button` component.

```js
const Book = (props) => {
  // added props parameter and gets the values from the props object
  const wrapper = () => props.getBook(props.id); // creating a wrapper for the getBook function

  return (
    <div className="book">
      <Image img={props.img} title={props.title} />
      <Title title={props.title} />
      {/* this is going to work */}
      <button onClick={wrapper}>Show Text</button>
      <Author author={props.author} />{" "}
    </div>
  );
};
```

- or we can use the `arrow function` to call the function.

```js
const Book = (props) => {
  // added props parameter and gets the values from the props object

  return (
    <div className="book">
      <Image img={props.img} title={props.title} />
      <Title title={props.title} />
      {/* this is going to work */}
      <button onClick={() => props.getBook(props.id)}>Show Text</button>
      <Author author={props.author} />{" "}
    </div>
  );
};
```

## Import & Export

First we need to remove the extra coding we did..

- remove the getBook function from the app component.

```js
const App = () => {
  return (
    <section className="booklist">
      {/* rendering the booklist directly using the `map` method */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />; // here we are passing the function as a prop
      })}
    </section>
  );
};

// book component
const Book = (props) => {
  // added props parameter and gets the values from the props object

  return (
    <div className="book">
      <Image img={props.img} title={props.title} />{" "}
      {/* getting the img and title value from the props object and then passing the title and img to the image component*/}
      <Title title={props.title} /> {/* getting the title value from the props object and then passing the title to the title component*/}
      <Author author={props.author} />{" "}
      {/* getting the author value from the props object and then passing the author to the author component*/}
    </div>
  );
};
```

- now setup 2 files named `books.js` and `Book.js` in the `src` folder.

- cut the `books` array from `index.js` and paste it in the `books.js` file respectively.

`src` folder will look something like this.

```
src
├── Book.js
├── books.js
├── index.css
├── index.js
```

now there will be some errors shown.. Not to worry lets import

in `app.js`

```js
....

import "./index.css";
import books from "./books.js"; // importing the books array from the books.js file

....
```

- this will also show another error we need to fix the `books.js` file.

```js
// add the export keyword before the array to be able to export it in the app.js file
export const books = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book_1.jpg",
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];
```

- now we need to import the `Book` component in the `app.js` file.

```js
....

import "./index.css";
import books from "./books.js"; // importing the books array from the books.js file

....
```

- still not working??

use the destrusturing method to import the `Book` component.

```js
....

import "./index.css";
import { books } from "./books.js"; // importing the books array from the books.js file

....
```

> Note: using the destructured way of importing is like telling the compiler that we are only importing the `books` array from the `books.js` file.

this should fix the errors now lets fix the `Book` component.

We can also do `export default` to export the `books` array.

```js
const books = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book_1.jpg",
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

export default books; // exporting the books array
```

now we dont need to use destructured importing in the `app.js` file.

```js
....

import "./index.css";
import books from "./books.js"; // importing the books array from the books.js file

....
```

> the `export default` can be used only once.

now lets fix the `Book` component.

- cut the `Book` component from the `app.js` file and paste it in the `Book.js` file.

- i will make some other changes and my Book.js file will look like this.

```js
// book component with the export keyword
export const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  // added props parameter and gets the values from the props object
  return (
    <div className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
  );
};
```

I made those changes so that i can easily give you demostration of how the data is flowing in the `react js` app and if we are getting the data or not in the browser `console`.

- now we need to import the `Book` component in the `app.js` file.

```js
....

import "./index.css";
import { books } from "./books.js"; // importing the books array from the books.js file
import { Book } from "./Book.js"; // importing the Book component from the Book.js file

....
```

In case of components we should use the `export default` and in case of other import we should use the destructure method.

```js
// book component
const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  // added props parameter and gets the values from the props object
  return (
    <div className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
  );
};

export default Book;
```

import

```js
....

import "./index.css";
import { books } from "./books.js"; // importing the books array from the books.js file
import Book from "./Book.js"; // importing the Book component from the Book.js file

....
```

now that we learned to import and export.. lets fix the stylling then we will move n to the next topic.

goto`Book.js` file:

```js
// book component
const Book = (props) => {
  const authorSTyllings = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  const { img, title, author } = props;
  console.log(props);
  // added props parameter and gets the values from the props object
  return (
    <div className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4 style={authorSTyllings}>{author}</h4>
    </div>
  );
};

export default Book;
```

this should fix the stylling, now lets store local images in the `src` folrder.

# **_SRC_** folder local images

- make a new folder named `images` in the `src` folder.

if you goto the github repo you can see the images folser and ther will be three images.

download those or you can download your own images.

- now lets import them in the `books.js` file.

```js
import img1 from "./images/img_1.jpg"; // importing the image
import img2 from "./images/img_2.jpg"; // importing the image
import img3 from "./images/img_3.jpg"; // importing the image

export const books = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: img1, //replaced the image with the local image
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    img: img2, //replaced the image with the local image
  },
  {
    id: 3,
    author: " Matthew Perry",
    title: "Friends, Lovers, and the Big Terrible Thing",
    img: img3, //replaced the image with the local image
  },
];
```

> Note: the `import img1` is renaming the image to `img1` so that we can use it in the `books` array.

Now you should see three Books with the local images.

and the is no need to go to the public folder to set the images there.

I like to use this mathod because it is much cleaner and faster and react will automatically do all the heavy lifting and help us by processing these pictures...

the next part is just some challegs and fun stuff to do to practice what we learned.

# **_CHALLENGES_**

## Challenge 1

Go look at the amazon best seller site [here](https://www.amazon.com/Best-Sellers-Books/zgbs/books)

You will see every book has a rating and a number of reviews.

We will try to add that to our app.

1. pass the index `map` function to the `app` component in `index.js` file.

```js
const App = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // here we are passing the index map function which will give us the index of every object in the books array
        return <Book {...book} key={book.id} number={index} />; // pass the index as a prop to the book component
      })}
    </section>
  );
};
```

2. now we can acces the `index` number as a prop in the `Book` component.

```js
// book component
const Book = (props) => {
  const authorSTyllings = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  const { img, title, author } = props;
  console.log(props);
  // added props parameter and gets the values from the props object
  return (
    <div className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4 style={authorSTyllings}>{author}</h4>
      <span className="number">{`# ${props.number + 1}`}</span> {/* here we are accessing the index number and then adding 1 to it because the index starts from 0 */}
    </div>
  );
};

export default Book;
```

3. do some stylling in the `index.css` file.

```css
.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  /* set relative */
  position: relative;
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  padding: 0.75rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: #c35600;
  color: #fff;
}
```

this should make the numbering visible.

## Adding a **Title** to the app

- In `Index.js` file

```js
const App = () => {
  return (
    <>
      {" "}
      {/* add a set of empty tags */}
      <h1>Amazon Best Sellers List</h1>
      <section className="booklist">
        {/* rendering the booklist directly using the `map` method */}
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />; // here we are passing the function as a prop
        })}
      </section>
    </>
  );
};
```

> Note: Without the empty tags we will get an error because we can only return one element in the return statement.

- In `index.css` file

```css
h1 {
  text-align: center;
  margin-top: 4rem;
  text-transform: capitalize;
}
```

# Build

Building a production ready app is very easy in react js.

- just go in terminal and type `npm run build` and then hit enter.

```bash
books % npm run build
```

this will make a build folder which will have a production ready app. if you go inside the build folder you will see a `index.html` file and a `static` folder.

```
build
|- images
|- index.html
|- static
```

- the index.html file is the main file that will be rendered in the browser.

- the static folder will have all the static files like css, js, images, etc.

# Deploy

- Vs code has port forwaarding which will need
  - Your github logged in
  - then it will porvide a dummy url to see the app in the browser.

### Well if you did all this than **CONGATULATIONS** you have completed the basics of react js.

# **_END_**

ভাই যান গা। ২৫০০ লাইন লেখছি আর লেখতে পারতাছিনা।
