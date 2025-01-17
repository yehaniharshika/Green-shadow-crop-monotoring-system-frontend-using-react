import { Outlet } from "react-router-dom";


export default function RootLayout() {
    // const location = useLocation();
    //
    // // Hide the navigation when on the signup or login page
    // const hideNavbar = location.pathname === "/signup" || location.pathname === "/login";

    return (
        <div>

            <main>
                <Outlet /> {/* This is where the page content will be rendered */}
            </main>
        </div>
    );
}
