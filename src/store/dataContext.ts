import {createContext} from "react";
import type {DataContextTypes} from "./types";

export const DataContext = createContext<DataContextTypes | null>(null);
