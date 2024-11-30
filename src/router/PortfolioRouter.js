import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/Home";
import AboutPage from "../pages/AboutMe";
import SkillsPage from "../pages/Skills";
import ProjectsPage from "../pages/Projects";
import ServicesPage from "../pages/Services";
import ContactsPage from "../pages/Contacts";
import RootLayout from "../Layouts/Root";

function PortfolioRouter() {
  console.log("PortfolioRouter starting ...");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/skills", element: <SkillsPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/contacts", element: <ContactsPage /> },
      ]
    },
  ]);

  console.log(router);
  console.log(router.routes);
  return router;
}

export default PortfolioRouter;
