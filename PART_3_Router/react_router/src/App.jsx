import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contacts"));
const Profile = lazy(() => import("./components/Profile"));
const Product = lazy(() => import("./components/Product"));
const Products = lazy(() => import("./components/Products"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          >
            <Route
              path="profile"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="product/:id" // Dynamic route for product details
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Product />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;