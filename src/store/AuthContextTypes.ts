export interface AuthContextTypes {
    username: string;
    setUsername: (username: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (password: string) => void;
    isAcceptTermsAndConditions: boolean;
    setIsAcceptTermsAndConditions: (
        isAcceptTermsAndConditions: boolean,
    ) => void;
    isValidEmail: boolean;
    isValidPassword: boolean;
    isDisabled: boolean;
}
