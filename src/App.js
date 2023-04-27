import CountdownPage from './pages/CountdownPage';
import Landing from './pages/Landing';
import './css/style.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/countdown',
      element: <CountdownPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
