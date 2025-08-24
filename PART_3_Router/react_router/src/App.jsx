import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router";
// import Navbar from "./components/Navbar";
import NotFound from "./ErrorPages/NotFound";
import ProtectedRoute from "./Protected/ProtectedRoute";
import ProductSharedLayout from "./Layouts/ProductSharedLayout";
import RootSharedLayout from "./Layouts/RootSharedLayout";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contacts"));
const Profile = lazy(() => import("./components/Profile"));
const Product = lazy(() => import("./Product_pages/Product"));
const Products = lazy(() => import("./Product_pages/Products"));
const Login = lazy(() => import("./components/Login"));
const Dashboard = lazy(() => import("./DashBoard_Pages/Dashboard"));

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<RootSharedLayout />}>
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
                <ProductSharedLayout />
              </Suspense>
            }
          >
            <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Products />
              </Suspense>
            }
          ></Route>
            <Route
              path=":id" // Dynamic route for product details
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Product />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login setUser={setUser} />
              </Suspense>
            }
          />

          <Route
            path="dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRoute user={user}>
                  {/* <Dashboard /> */}
                  <Dashboard user={user} />
                </ProtectedRoute>
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
