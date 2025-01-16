import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                </li>
                <li>
                    <Link to="/add" className="hover:underline">Add Customer</Link>
                </li>
                <li>
                    <Link to="/delete" className="hover:underline">Delete Customer</Link>
                </li>
                <li>
                    <Link to="/update" className="hover:underline">Update Customer</Link>
                </li>
            </ul>
        </nav>
    );
};
