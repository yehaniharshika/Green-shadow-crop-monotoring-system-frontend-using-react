import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from './pages/Dashboard.tsx';
import UpdateCustomer from './pages/UpdateCustomer.tsx';
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import SignUp from "./components/Signup.tsx";
import Login from "./components/Login.tsx";
import {Navigate} from "react-router-dom";
import Crop from "./pages/Crop.tsx";
import RootLayout from "./components/RootLayout.tsx";
import FieldSection from "./pages/FieldSection.tsx";
import StaffSection from './pages/StaffSection.tsx';


function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            children: [
                { path: '', element: <Navigate to="/signup" replace /> }, // Default to Sign-Up
                { path: '/signup', element: <SignUp /> }, // Sign-Up route
                { path: '/login', element: <Login /> }, // Login route
                { path: '/dashboard', element: <Dashboard /> }, // Dashboard route
                { path: '/field', element: <FieldSection/> },
                { path: '/staff', element: <StaffSection /> },
                { path: '/crop', element: <Crop /> },
                { path: '/equipment', element: <UpdateCustomer /> },
                { path: '/vehicle', element: <UpdateCustomer /> },
                { path: '/crop', element: <UpdateCustomer /> },
            ],
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    );
}

export default App;
