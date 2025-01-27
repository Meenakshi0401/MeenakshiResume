import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorScreen from './screens/error/ErrorScreen';
import HomeScreen from './screens/home/HomeScreen';
import "./assets/sass/style.scss";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <HomeScreen/>,

    // children: [
    //   {
    //     path : "*",
    //     element: <ErrorScreen/>
    //   }
    // ]
  },
  {
    path: "*",
    element: <ErrorScreen/>
  }
]);

export default function App () {
  return <RouterProvider router={router}/>;
}


