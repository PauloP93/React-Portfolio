import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import data from "./data/portfolio-data.json";
import ServiceData from "./data/services-data.json";
import ProjectData from "./data/projects-data.json";
import SkillsData from "./data/skills-data.json";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutMe";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";
import ContactsPage from "./pages/Contacts";
import RootLayout from "./Layouts/Root";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
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
          { path: "/skills", element: <SkillsPage skills={SkillsData} /> },
          {
            path: "/projects",
            element: <ProjectsPage Projects={ProjectData} />,
          },
          {
            path: "/services",
            element: (
              <ServicesPage Services={ServiceData.freelancing_services} />
            ),
          },
          { path: "/contacts", element: <ContactsPage /> },
        ],
      },
    ],
    { basename: "/React-Portfolio" }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;