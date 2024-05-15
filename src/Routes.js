import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout/Layout";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration.";
import Services from "./Pages/Services";
import MyProfile from "./Pages/MyProfile";
import AddService from "./Pages/AddService";
import MyServices from "./Pages/MyServices";
import IndividualItem from "./Pages/IndivitualItem";
import ServiceToDo from "./Pages/ServiceToDo";
import BookedService from "./Pages/BookedService";
import Doctors from "./Pages/Doctors";
import DocProfile from "./Pages/DocProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Registration />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <IndividualItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceTodo",
        element: (
          <PrivateRoute>
            <ServiceToDo />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookedService",
        element: (
          <PrivateRoute>
            <BookedService />
          </PrivateRoute>
        ),
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctor/:id",
        element: <DocProfile />,
      },
    ],
  },
]);
export default routes;
