import * as Page from './pages/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PostDataContextProvider } from './pages/post/context/PostDataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterProvider } from './pages/home/context/FilterContext';
import { AuthContextProvider } from './pages/auth/context/AuthContext';
import { checkAuthToken, protectLoggedInPage } from '@pages/auth/utils/token';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Page.Root />,
      errorElement: <Page.PageNotFound />,
      children: [
        { index: true, element: <Page.Home /> },
        { path: 'register', element: <Page.Register />, loader: protectLoggedInPage },
        {
          path: 'post',
          children: [
            { index: true, element: <Page.Post />, loader: checkAuthToken.bind(null, '/login') },
            { path: ':postId', element: <Page.PostDetail /> },
            { path: ':postId/edit', element: <Page.Post /> },
          ],
        },
        { path: 'login', element: <Page.Login />, loader: protectLoggedInPage },
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <PostDataContextProvider>
          <FilterProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <RouterProvider router={router} />
            </LocalizationProvider>
          </FilterProvider>
        </PostDataContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
