
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Error from "./components/common/Error";
import Login from './pages/Login';
import Join from './pages/Join';
import Rank from "./pages/Rank";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/join',
    element: <Join />
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/rank',
    element: <Rank />
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
  return (
    <RouterProvider router={rotuer} />
  )
};

export default App;