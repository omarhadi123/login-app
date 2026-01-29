import {EMAIL_REGEX, PWD_REGEX} from "@/utils/constants";
import {useMemo, useState, type ReactNode} from "react";
import {AuthContext} from "./AuthContext";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const isValidEmail = useMemo(() => EMAIL_REGEX.test(email), [email]);
    const isValidPassword = useMemo(() => PWD_REGEX.test(password), [password]);
    const isDisabled = !isValidEmail || !isValidPassword;
    const [isAcceptTermsAndConditions, setIsAcceptTermsAndConditions] =
        useState(false);

    return (
        <AuthContext.Provider
            value={{
                username,
                email,
                password,
                confirmPassword,
                setUsername,
                setEmail,
                setPassword,
                setConfirmPassword,
                isValidEmail,
                isValidPassword,
                isDisabled,
                isAcceptTermsAndConditions,
                setIsAcceptTermsAndConditions,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
