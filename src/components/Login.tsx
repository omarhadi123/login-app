import {Stack} from "@chakra-ui/react";
import FormHeading from "./FormHeading";
import InputField from "./InputField";
import {useAuth} from "@/hooks/useAuth";
import SubmitBtn from "./SubmitBtn";
import NewAccount from "./NewAccount";
import Form from "./Form";
import type {FormEvent} from "react";

function Login() {
    const {
        email,
        password,
        setEmail,
        setPassword,
        isDisabled,
        isValidEmail,
        isValidPassword,
    } = useAuth();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Stack>
                    <FormHeading label={"login"} />
                    <Stack gap={"3"}>
                        <InputField
                            type="email"
                            onChange={(text: string) => setEmail(text)}
                            isValid={email !== "" && !isValidEmail}
                        />
                        <InputField
                            type="password"
                            onChange={(text: string) => setPassword(text)}
                            isValid={password !== "" && !isValidPassword}
                        />
                        <SubmitBtn isDisabled={isDisabled} label={"login"} />
                    </Stack>
                    <NewAccount />
                </Stack>
            </Form>
        </>
    );
}

export default Login;
