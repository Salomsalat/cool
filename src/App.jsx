import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Leg from "./components/Leg/Leg";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Releated from "./components/Releated/Releated";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import Reviews from "./components/Reviews/Reviews";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";  // <-- Import Checkout Component

const RootLayout = () => (
  <>
    <Header />
    <Hero />
    <Main />
    <Leg />
    <Blog />
    <Footer />
  </>
);

const ProductLayout = () => (
  <>
    <ProductDetails />
    <Releated />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/checkout",  
    element: <Checkout />,
  },
  {
    path: "/product/:id",
    element: <ProductLayout />,
    children: [
      {
        path: "description",
        element: <ProductDescription />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
