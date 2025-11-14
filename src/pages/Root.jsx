import { Outlet } from "react-router";

import MainNavigation from "../components/MainNavigation.jsx";

const RootLayout = () => {

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;