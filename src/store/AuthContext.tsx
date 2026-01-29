import {createContext} from "react";
import type {AuthContextTypes} from "./AuthContextTypes";

export const AuthContext = createContext<AuthContextTypes | null>(null);
