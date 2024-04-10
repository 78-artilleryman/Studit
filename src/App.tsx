import * as Page from './pages/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PostDataContextProvider } from './pages/post/context/PostDataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterProvider } from './pages/home/context/FilterContext';
import { AuthContextProvider } from './pages/auth/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Page.Root />,
      children: [
        { index: true, element: <Page.Home /> },
        { path: 'register', element: <Page.Register /> },
        {
          path: 'post',
          children: [
            { index: true, element: <Page.Post /> },
            { path: ':postId', element: <Page.PostDetail /> },
          ],
        },
        { path: 'login', element: <Page.Login /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
