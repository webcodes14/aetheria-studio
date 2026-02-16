import { Outlet } from "react-router";

import HeaderNavigation from "./HeaderNavigation";
import FooterNavigation from "./FooterNavigation";

const RootLayout = () => {
    return (
        <>
            <HeaderNavigation />
            <main>
                <Outlet />
            </main>
            <FooterNavigation />
        </>
    )
}

export default RootLayout;