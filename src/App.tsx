import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Error from "./components/common/Error";
import Login from "./pages/Login";
import Join from "./pages/Join";
import ResetPassword from "./pages/ResetPassword";
import Rank from "./pages/Rank";
import MyPage from "./pages/myPage";
import { AuthProvider } from './context/AuthContext';
import QuizResult from "./pages/QuizResult";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/users/login',
    element: <Login />
  },
  {
    path: '/users/join',
    element: <Join />
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
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
  {
    path: '/myPage',
    element: <MyPage />
  },
  {
    path: '/quiz-result',
    element: <QuizResult/>
  },
];

const rotuer = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: (
        <Layout>
          <Error />
        </Layout>
      ),
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
