import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation.tsx";

export function RootLayout() {
    const location = useLocation();

    // Check if the current route is Sign-Up or Login
    const hideNavbar = location.pathname === "/signup" || location.pathname === "/login";

    return (
        <div>
            {/* Render Navigation only if not on Sign-Up or Login */}
            {!hideNavbar && <Navigation />}
            <main>
                <Outlet />
            </main>
        </div>
    );
}
