import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Join from './pages/Join';
import Quiz from "./pages/Quiz";
import Ranking from "./pages/Ranking";
import Home from "./pages/Home";
import Error from "./components/common/Error";
import Login from './pages/Login';
import Join from './pages/Join';
import { AuthProvider } from './context/AuthContext';

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
    <AuthProvider>
      <RouterProvider router={rotuer} />
    </AuthProvider>
  )
};

export default App;