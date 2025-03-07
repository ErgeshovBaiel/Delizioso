import Layout from "../components/layout/Layout";
import AboutUs from "../pages/aboutus/AboutUs";
import HomePage from "../pages/HomePage/HomePage";

export const menu = [
  {
    name: "Home",
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      }
    ]
  }
];
