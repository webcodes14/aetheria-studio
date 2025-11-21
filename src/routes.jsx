import { lazy, Suspense } from "react";

import RootLayout from "./pages/Root.jsx";
import RootServiceLayout from "./pages/RootService.jsx";
import ErrorPage from "./pages/Error.jsx";


const HomePage = lazy(() => import("./pages/Home.jsx"));
const PortfolioPage = lazy(() => import("./pages/Portfolio.jsx"));
const PortfolioDetailPage = lazy(() => import("./pages/PortfolioDetail.jsx"));
const ServicePage = lazy(() => import("./pages/Service.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
const BlogPage = lazy(() => import("./pages/Blog.jsx"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetail.jsx"));
const ContactPage = lazy(() => import("./pages/Contact.jsx"));

const ServiceBrandingPage = lazy(() => import("./pages/ServiceBranding.jsx"));
const ServiceWebdesignPage = lazy(() => import("./pages/ServiceWebdesign.jsx"));
const ServiceConsultationPage = lazy(() => import("./pages/ServiceConsultation.jsx"));

import Loading from "./components/Loading.jsx";

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        name: 'Úvod',
        element: 
        <Suspense fallback={<Loading />}>
            <HomePage />
        </Suspense> },
      { 
        name: 'Portfolio',
        path: 'portfolio',
        children: [
          { index: true, 
            element: 
            <Suspense fallback={<Loading />}>
                <PortfolioPage />
            </Suspense> },
          {
            path: 'portfolio/:portfolioId',
            element: 
            <Suspense fallback={<Loading />}>
                <PortfolioDetailPage />
            </Suspense>
          }
        ]
      },
      { 
        name: 'Služby',
        path: 'sluzby',
        element: <RootServiceLayout />,
        children: [
          { index: true, 
            element: 
            <Suspense fallback={<Loading />}>
                <ServicePage />
            </Suspense> },
          {
            name: 'Branding',
            path: 'branding',
            element: 
            <Suspense fallback={<Loading />}>
                <ServiceBrandingPage />
            </Suspense>
          },
          {
            name: 'Webdesign',
            path: 'webdesign',
            element: 
            <Suspense fallback={<Loading />}>
                <ServiceWebdesignPage />
            </Suspense>
          },
          {
            name: 'Konzultace',
            path: 'konzultace',
            element: 
            <Suspense fallback={<Loading />}>
                <ServiceConsultationPage />
            </Suspense>
          }
        ]
      },
      { 
        name: 'O nás',
        path: 'o-nas',
        element: 
        <Suspense fallback={<Loading />}>
            <AboutPage />
        </Suspense>
      },
      { 
        name: 'Blog',
        path: 'blog',
        children: [
          { index: true, 
            element: 
            <Suspense fallback={<Loading />}>
                <BlogPage />
            </Suspense> },
          {
            path: 'blog/:blogId',
            element: 
            <Suspense fallback={<Loading />}>
                <BlogDetailPage />
            </Suspense>
          }
        ]
      },
      { 
        name: 'Kontakt',
        path: 'kontakt',
        element: 
        <Suspense fallback={<Loading />}>
            <ContactPage />
        </Suspense>
      }
    ]
  }
]