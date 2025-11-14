import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/Error.jsx";
import HomePage from "./pages/Home.jsx";
import PortfolioPage from "./pages/Portfolio.jsx";
import PortfolioDetailPage from "./pages/PortfolioDetail.jsx";
import ServicePage from "./pages/Service.jsx";
import AboutPage from "./pages/About.jsx";
import BlogPage from "./pages/Blog.jsx";
import BlogDetailPage from "./pages/BlogDetail.jsx";
import ContactPage from "./pages/Contact.jsx";
import ServiceBrandingPage from "./pages/ServiceBranding.jsx";
import ServiceWebdesignPage from "./pages/ServiceWebdesign.jsx";
import ServiceConsultationPage from "./pages/ServiceConsultation.jsx";
import RootServiceLayout from "./pages/RootService.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: 'portfolio',
        children: [
          { index: true, element: <PortfolioPage /> },
          {
            path: 'portfolio/:portfolioId',
            element: <PortfolioDetailPage />
          }
        ]
      },
      { 
        path: 'sluzby',
        element: <RootServiceLayout />,
        children: [
          { index: true, element: <ServicePage /> },
          {
            path: 'branding',
            element: <ServiceBrandingPage />
          },
          {
            path: 'webdesign',
            element: <ServiceWebdesignPage />
          },
          {
            path: 'konzultace',
            element: <ServiceConsultationPage />
          }
        ]
      },
      { 
        path: 'o-nas',
        element: <AboutPage />
      },
      { 
        path: 'blog',
        children: [
          { index: true, element: <BlogPage /> },
          {
            path: 'blog/:blogId',
            element: <BlogDetailPage />
          }
        ]
      },
      { 
        path: 'kontakt',
        element: <ContactPage />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
