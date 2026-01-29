import InputField from "@/components/InputField";
import {useAuth} from "@/hooks/useAuth";
import {onSignUp} from "@/utils/onSignUp";
import {Stack} from "@chakra-ui/react";
import {type FormEvent} from "react";
import FormHeading from "./FormHeading";
import CheckBox from "./CheckBox";
import SubmitBtn from "./SubmitBtn";
import Form from "./Form";

function SignUp() {
    const {
        email,
        password,
        confirmPassword,
        setUsername,
        setEmail,
        setPassword,
        setConfirmPassword,
        isAcceptTermsAndConditions,
        isDisabled,
        isValidEmail,
        isValidPassword,
    } = useAuth();

    async function hadndleSubmit(e: FormEvent) {
        e.preventDefault();
        if (password !== confirmPassword) alert("Passwords do not matches!");
        else {
            await onSignUp();
            console.log("Singed up");
        }
    }

    return (
        <>
            <Form onSubmit={hadndleSubmit}>
                <Stack>
                    <FormHeading label={"sign up"} />
                    <Stack gap={"3"}>
                        {/* NAME */}
                        <InputField
                            type="text"
                            onChange={(username: string) =>
                                setUsername(username)
                            }
                        />
                        {/* EMAIL */}
                        <InputField
                            type="email"
                            isValid={email !== "" && !isValidEmail}
                            onChange={(email: string) => setEmail(email)}
                        />
                        {/* PASSWRORD */}
                        <InputField
                            type="password"
                            isValid={password !== "" && !isValidPassword}
                            onChange={(password: string) =>
                                setPassword(password)
                            }
                        />
                        {/* CONFIRM PASSWRORD */}
                        <InputField
                            type="confirm-password"
                            onChange={(password: string) =>
                                setConfirmPassword(password)
                            }
                        />
                        <CheckBox />
                        <SubmitBtn
                            isDisabled={
                                isDisabled || !isAcceptTermsAndConditions
                            }
                            label={"create account"}
                        />
                    </Stack>
                </Stack>
            </Form>
        </>
    );
}

export default SignUp;
