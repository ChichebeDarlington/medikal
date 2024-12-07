import { FC } from "react";
import "./App.css";
// React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Service from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";
import Blogs from "./components/Blogs";
import Appointment from "./components/Appointment";
import Contacts from "./pages/Contacts";
import Email from "./pages/Email";
import Faq from "./pages/Faq";
import OurPricing from "./pages/OurPricing";
import Testimonial from "./components/Testimonial";
import Timetable from "./pages/Timetable";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home1 from "./pages/home/Home1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home1 />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/servicedetails",
    element: <ServiceDetails />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/email",
    element: <Email />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/ourpricing",
    element: <OurPricing />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/timetable",
    element: <Timetable />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App: FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
