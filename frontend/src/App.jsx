import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Pages
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

// App
const App = () => {

  // Routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;