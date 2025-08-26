import GetRequest from "./Request/GetRequest";
import PostRequest from "./Request/PostRequest";
import PutRequest from "./Request/PutRequest";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        AXIOS
      </h1>

      {/* <GetRequest /> */}
      {/* <PostRequest /> */}
      <PutRequest />
    </>
  );
}

export default App;
