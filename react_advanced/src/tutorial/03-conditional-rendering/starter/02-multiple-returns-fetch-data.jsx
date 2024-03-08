import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const shit = await response.json();
        console.log(shit);
        setUser(shit);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  if (user) {
    return (
      
        <div className="card" style={{width: '18rem', margin: 'auto'}}>
          <img src={user.avatar_url} className="card-img-top" alt={user.name} />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.bio}</p>
            <a href={user.html_url} className="btn btn-primary">Go to profile</a>
          </div>
        </div>
      
    );
  }

  return <div>loading...</div>;
};
export default MultipleReturnsFetchData;
