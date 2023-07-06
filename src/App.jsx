import Home from  "./Sections/Home/home";
import Watch from  "./Sections/Watch/watch";
import Register from  "./Sections/Register/register";
import Login from  "./Sections/Login/login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/watch",
      element:<Watch/>,
    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/register",
      element:<Register/>,
    },
  ]);

  return <RouterProvider router={router} />
  // return <Home/>;
  // return <Watch/>;
  // return <Login/>
  // return <Register/>
}

export default App; 
