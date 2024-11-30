import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import data from "./data/portfolio-data.json";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutMe";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";
import ContactsPage from "./pages/Contacts";
import RootLayout from "./Layouts/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              homeDescription={data.HomeDescription}
              github={data.Github}
              linkedin={data.Linkedin}
              carrouselImgs={data.Techstack}
              myImg={data.MyImg}
            />
          ),
        },
        { path: "/about", element: <AboutPage /> },
        { path: "/skills", element: <SkillsPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/contacts", element: <ContactsPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
