import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Quiz from "./pages/Quiz";
import Ranking from "./pages/Ranking";
import Home from "./pages/Home";
import Error from "./components/common/Error";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <h1>Login Component</h1>,
  },
  {
    path: "/join",
    element: <h1>Join Component</h1>,
  },
  {
    path: "/error",
    element: <Error />,
  },
];

const rotuer = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Layout><Error /></Layout>,
    };
  })
);

const App = () => {
  return <RouterProvider router={rotuer} />;
};

export default App;