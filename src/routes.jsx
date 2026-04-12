import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";

import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/Home";
import Skeleton from "./components/loading/Skeleton";

const ProjectsPage = lazy(() => import("./pages/Projects"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetail"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ErrorPage = lazy(() => import("./pages/Error"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { 
                index: true, 
                labels: { cs: "Domů", en: "Home", ko: "홈" },
                element: <HomePage />,
            },
            {
                path: "projects",
                labels: { cs: "Projekty", en: "Projects", ko: "프로젝트" },
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={<Skeleton />}><ProjectsPage /></Suspense>
                    },
                    {
                        path: ":projectId",
                        element: <Suspense fallback={<Skeleton />}><ProjectDetailPage /></Suspense>
                    }
                ]
            },
            {
                path: "services",
                labels: { cs: "Služby", en: "Services", ko: "서비스" },
                element: <Suspense fallback={<Skeleton />}><ServicesPage /></Suspense>
            },
            {
                path: "contact",
                labels: { cs: "Kontakt", en: "Contact", ko: "연락처" },
                element: <Suspense fallback={<Skeleton />}><ContactPage /></Suspense>
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
]);