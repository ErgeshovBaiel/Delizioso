import Layout from "../components/layout/Layout";
import AboutUs from "../pages/aboutus/AboutUs";
import HomePage from "../pages/HomePage/HomePage";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order/Order";

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
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/order-online",
        element: <Order />
      }
    ]
  }
];


function ItemCart({ text, price,  count }) {
  return (
    <div>
      <div>
        <h3>{text}</h3>
        icon
      </div>
      <div>
        <div className="flex bg-[#FAFAF9] gap-[20px] rounded-[83px]">
          <span>-</span>
          <span>{count}</span>
          <span className="shadow-[3.32px_3.32px_4.99px_0px_#3FC66E12]">+</span>
        </div>
        <h5>{price}</h5>
      </div>
    </div>
  )
}

// function TextAndPrice ({text, price}) {
//   return (
//     <div>
//       <h3>{text}</h3>
//       <h5>$ {price} </h5>
//     </div>
//   )
// }

// // <TextAndPrice text="Subtotal" price={78}/>
// // <TextAndPrice text="Tax fee" price={78}/>
// // <TextAndPrice text="" price={5.0}/>
// // <TextAndPrice text="" price={78}/>
//  <ItemCart  text="" price={78}  count={6}/>
//  <ItemCart  text="" price={78}  count={6}/>
//  <ItemCart  text="" price={78}  count={6}/>