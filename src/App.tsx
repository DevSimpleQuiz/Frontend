import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Join from './pages/Join';

const routeList = [
  {
    path: '/',
    element: <h1>Home Component</h1>
  },
  {
    path: '/login',
    element: <h1>Login Component</h1>
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
    <RouterProvider router={rotuer} />
  )
};

export default App;