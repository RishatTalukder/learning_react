import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Destinations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const fetchData = async () => {
    setLoading(true);
    const url = 'http://localhost:3000/destinations';

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false); // setting the loading state variable to false
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Destinations</h1>
      <div className="d-flex flex-column align-items-center gap-4">
        {data.map((item) => {
          const isExpanded = expandedItems[item.id];
          return (
            <div
              key={item.id}
              className="card shadow-sm"
              style={{ width: '100%', maxWidth: '500px' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{item.name}</h5>
                <p className="card-text text-center">
                  {isExpanded
                    ? item.description
                    : item.description.slice(0, 80) + '...'}
                </p>
                {isExpanded && (
                  <p className="card-text text-center">{item.location}</p>
                )}
                <button
                  className="btn btn-primary mx-auto mt-auto"
                  onClick={() => toggleExpand(item.id)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
