import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Quiz from "./pages/Quiz";
import InfiniteQuiz from "./pages/InfiniteQuiz";
import Ranking from "./pages/Ranking";
import Home from "./pages/Home";

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
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/infiniteQuiz",
    element: <InfiniteQuiz />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
  },
];

const rotuer = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
    };
  })
);

const App = () => {
  return <RouterProvider router={rotuer} />;
};

export default App;