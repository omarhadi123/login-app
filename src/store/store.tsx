import {useState} from "react";
import type {DataState, Event} from "./types";

const initialData = {
    email: "",
    password: "",
};

export function useData() {
    const [data, setData] = useState<DataState>(initialData);

    function updateData(e: Event) {
        const {name, value} = e.target;
        setData((prevData) => ({...prevData, [name]: value}));
    }

    return {data, updateData};
}
