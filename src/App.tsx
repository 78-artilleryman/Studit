import * as Page from '@Pages/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Page.Root />,
      children: [
        { index: true, element: <Page.Home /> },
        { path: 'register', element: <Page.Register /> },
        { path: 'login', element: <Page.Login /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
