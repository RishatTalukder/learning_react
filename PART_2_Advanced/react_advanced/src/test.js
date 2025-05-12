// test.js
// pending example
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

// rejected example

const url = "https://api.github.com/user";

try {
  const result = await axios.get(url);
  console.log(result);
} catch (error) {
  console.log(error);
}