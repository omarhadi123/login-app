import {useContext} from "react";
import {DataContext} from "@store/dataContext";

export const useStore = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error("An Error Has Occurad!");
    return context;
};
