import Home from "./assets/pages/Home";
import Layout from "./assets/components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuResturant from "./assets/pages/MenuResturant";
import MenuCategoryDetail from "./assets/pages/MenuCategoryDetail";
import About from "./assets/pages/About"; 
import ContactUs from "./assets/pages/ContactUs";
import MenuButcher from "./assets/pages/MenuButcher";

export const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuResturant />,
      },
      {
        path: "/menu/:id",
        element: <MenuCategoryDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/menubutcher/:id",
        element: <MenuButcher />,
      },
      ],
  }
]);
const App = () => {
  return (
   <>
   <RouterProvider router={router} /> 
   </>
  );
}
export default App;