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

```js

//app.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      Hello World
    </>
  )
}

export default App

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

this will start the development server and you should see a  `Hello World` message in the browser. 

We are ready to start the projects now.

#### **Some more `useful extensions` for `vs code`**

**PREVIOUSLY INSTALLED:**
- `ES7+ React/Redux/React-Native snippets` - For using `React` snippets.
- `Prettier` - For formatting the code.

**NEWLY INSTALLED:**
- `Advanced New File` - For creating new files and folders easily.
- `Auto Close Tag` - For auto closing tags in `HTML` and `JSX`.
- `Auto Rename Tag` - For auto renaming tags in `HTML` and `JSX`.
- `Indent-Rainbow` - For indenting the code and making it look good.

