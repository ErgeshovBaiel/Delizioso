import Layout from "../components/layout/Layout";
import AboutUs from "../pages/aboutus/AboutUs";
import HomePage from "../pages/HomePage/HomePage";
import Menu from "../pages/menu/Menu";
import OrderOnline from "../pages/orderonline/OrderOnline";

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
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "order-online",
        element: <OrderOnline />
      }
    ]
  }
];
