import {type ReactNode} from "react";
import {DataContext} from "./dataContext";
import {useData} from "./store";

export const ContextProvider = ({children}: {children: ReactNode}) => {
    const {data, updateData} = useData();

    return (
        <>
            <DataContext.Provider value={{data, updateData}}>
                {children}
            </DataContext.Provider>
        </>
    );
};
