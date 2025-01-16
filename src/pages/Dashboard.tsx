import { useSelector } from "react-redux";
 // Adjust the path based on your project structure.
import { Customer } from "../models/Customer";
import {RootState} from "../store/Store.ts";

export default function Dashboard() {
    const customers = useSelector((state: RootState) => state.customers.customers);

    return (
        <>
            <header className="py-6">
                <h2>Dashboard</h2>
            </header>

            <div className="overflow-x-auto">
                <table className="w-3/4 bg-purple-50 shadow-md rounded-lg overflow-hidden mx-auto py-6">
                    <thead className="bg-purple-200 text-gray-700">
                    <tr>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer, index: number) => (
                        <tr
                            key={customer.email}
                            className={index % 2 === 0 ? "bg-purple-50 hover:shadow-lg" : "bg-purple-100 hover:shadow-lg"}
                        >
                            <td className="py-3 px-6">{customer.name}</td>
                            <td className="py-3 px-6">{customer.email}</td>
                            <td className="py-3 px-6">{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
