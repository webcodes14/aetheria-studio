import { Outlet } from "react-router";

import MainNavigation from "../components/MainNavigation.jsx";

const RootLayout = () => {

    return (
        <>
            <MainNavigation />
            <main className="md:max-w-screen-2xl py-3 mb-4 mt-28 mx-auto px-4">
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;