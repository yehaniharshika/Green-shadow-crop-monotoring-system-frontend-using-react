import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Login Successful for ${formData.email}`);
        console.log(formData);
        navigate('/dashboard'); // Redirect to Dashboard after Login
    };

    return (
        <div className="flex justify-center items-center h-screen bg-amber-600">
            <div className="absolute top-0 left-0 w-full h-full">
                <img src="/src/images/photoScreen.jpg" alt="Background" className="w-full h-full object-cover"/>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 relative">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full mb-4 p-2 border rounded"/>
                <input type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <a href="#">Forgot your password?</a>
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
            </form>
        </div>

    );
};

export default Login;
