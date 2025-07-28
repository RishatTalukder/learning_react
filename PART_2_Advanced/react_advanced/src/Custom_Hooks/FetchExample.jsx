import React from "react";
import useFetchData from "./hooks/useFetchData"; // importing the custom hook

const FetchExample = () => {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts"); // using the custom hook

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center">Fetched Data</h2>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchExample;