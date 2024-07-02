import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Join from './pages/Join';
import { AuthProvider } from './context/AuthContext';

const routeList = [
  {
    path: '/',
    element: <h1>Home Component</h1>
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
    path: '/quiz',
    element: <h1>Quiz Component</h1>
  },
]

const rotuer = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>
    }
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