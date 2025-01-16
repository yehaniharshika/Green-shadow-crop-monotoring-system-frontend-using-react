import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from './pages/Dashboard.tsx';
import AddCustomer from './pages/AddCustomer.tsx';
import DeleteCustomer from './pages/DeleteCustomer.tsx';
import UpdateCustomer from './pages/UpdateCustomer.tsx';
import { RootLayout } from './components/RootLayout.tsx';
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import SignUp from "./components/Signup.tsx";

import Login from "./components/Login.tsx";
import {Navigate} from "react-router-dom";


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
                { path: '/add', element: <AddCustomer /> },
                { path: '/delete', element: <DeleteCustomer /> },
                { path: '/update', element: <UpdateCustomer /> },
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
