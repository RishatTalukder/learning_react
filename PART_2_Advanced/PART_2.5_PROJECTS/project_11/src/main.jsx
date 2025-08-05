import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'; // importing the AppContextProvider component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider> {/* wrapping the App component with the AppContextProvider component */}
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)