import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user}</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setUser("");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>User Not logged in</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setUser("John Doe");
            }}
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );

  return <h2>user challenge</h2>;
};

export default UserChallenge;
