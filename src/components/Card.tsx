// Card.tsx
export const Card = ({ title, value }: { title: string; value: string | number }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg w-full">
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
};
