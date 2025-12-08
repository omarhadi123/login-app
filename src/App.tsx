import {useEffect, useState} from "react";
import "./App.css";
import Loading from "./pages/Loading";

interface Data {
    name: string;
    age: number;
    city: string;
}
function App() {
    const [data, setData] = useState<Data[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("data/data.json");
                const data = await res.json();
                setData(data);
            } catch (err) {
                const errorMsg =
                    err instanceof Error ? err.message : String(err);
                setError(errorMsg);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                {error && <div>Error: {String(error)}</div>}
                {data.length > 0 && (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                {item.name}, {item.age} years old, from{" "}
                                {item.city}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Loading />
        </>
    );
}

export default App;
