import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './styles/Signup.css'

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Sign-Up Successful for ${formData.name}`);
        console.log(formData);
        navigate('/login'); // Redirect to Login after Sign-Up
    };

    return (
        <div className="flex justify-center items-center h-screen bg-amber-600">
            <div className="absolute top-0 left-0 w-full h-full">
                <img src="/src/images/photoScreen.jpg" alt="Background" className="w-full h-full object-cover"/>
            </div>
            <form onSubmit={handleSubmit} className="bg-teal-400 p-8 rounded shadow-md w-96 relative">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full mb-4 p-2 border rounded border-solid border-black"/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full mb-4 p-2 border rounded border-solid border-black"/>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full mb-4 p-2 border rounded border-solid border-black"/>
                <select name="role" value={formData.role} onChange={handleChange} className="w-full mb-4 p-2 border rounded border-black">
                    <option selected>Select role</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="SCIENTIST">SCIENTIST</option>
                    <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                    <option value="OTHER">OTHER</option>
                </select>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
