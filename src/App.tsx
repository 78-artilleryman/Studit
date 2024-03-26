import * as Page from '@Pages/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PostDataContextProvider } from '@Pages/post/context/PostDataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterProvider } from '@Pages/home/context/FilterContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Page.Root />,
      children: [
        { index: true, element: <Page.Home /> },
        { path: 'register', element: <Page.Register /> },
        { path: 'post', element: <Page.Post /> },
        { path: 'login', element: <Page.Login /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <PostDataContextProvider>
        <FilterProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={router} />
          </LocalizationProvider>
        </FilterProvider>
      </PostDataContextProvider>
    </>
  );
}

export default App;
