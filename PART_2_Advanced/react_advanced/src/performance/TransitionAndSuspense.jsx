import React, { useState, Suspense } from "react";

const LazyImageGallery = React.lazy(() => import("./ImageGallery"));

const TransitionAndSuspense = () => {
  const [inputValue, setInputValue] = useState("");
  const [showImages, setShowImages] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowImages = () => {
    setShowImages(!showImages); // Toggle the visibility of images
  };

  return (
    <div className="container">
      <h1>Lazy & Suspense Example</h1>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="form-control mb-3"
      />

      <button
        onClick={handleShowImages}
        className="btn btn-primary mb-3"
      >
        Show 5000 Images
      </button>

      {showImages && (
        <Suspense fallback={<div className="text-center">Loading images...</div>}>
          <LazyImageGallery />
        </Suspense>
      )}
    </div>
  );
};

export default TransitionAndSuspense;
