import {Center, Field, Fieldset, Input} from "@chakra-ui/react";
import Submit from "./Submit";
import {PasswordInput} from "@/components/ui/password-input";
import Header from "./Header";
import {useStore} from "@/hooks/useStore";
import {useState} from "react";
import type {Event} from "@/store/types";

function Form() {
    const {updateData} = useStore();
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [validPassword, setValidPassword] = useState<boolean>(false);

    function checkInput(e: Event) {
        const emailRegx = /^[a-zA-Z0-9_.-]+@[a-zA-Z._-]+\.[a-zA-Z]{2,}$/gi;
        const passwrodRegx =
            /^((?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[0-9]).{8,})\S$/gi;
        const {name, value} = e.target;

        if (name === "password") {
            if (passwrodRegx.test(value)) {
                setValidPassword(true);
                updateData(e);
            } else {
                setValidPassword(false);
            }
        }

        if (name === "email") {
            if (emailRegx.test(value)) {
                setValidEmail(true);
                updateData(e);
            } else {
                setValidEmail(false);
            }
        }
    }

    return (
        <>
            <Center width={"full"} height={""}>
                <Fieldset.Root
                    width={["full", "full", "2/3", "2/5"]}
                    background={"gray.subtle"}
                    rounded={"xl"}
                    paddingX={["4", "6"]}
                    paddingY={["8", "12"]}
                    marginTop={["4", "8", "12"]}
                    shadow={"lg"}>
                    {/* Form Header */}

                    <Header />

                    <Fieldset.Content>
                        {/* Email Input */}
                        <Field.Root
                            color={{
                                base: "var(--primary-text-light-color)",
                                _dark: "var(--primary-text-dark-color)",
                            }}>
                            <Field.Label>Email</Field.Label>
                            <Input
                                name="email"
                                placeholder="Enter your email"
                                onChange={(e) => {
                                    checkInput(e);
                                }}
                                background={"gray.border"}
                                focusRingColor={
                                    validEmail
                                        ? {base: "", _dark: "purple.700"}
                                        : "red.500"
                                }
                            />
                        </Field.Root>
                        {/* Password Input */}
                        <Field.Root
                            color={{
                                base: "var(--primary-text-light-color)",
                                _dark: "var(--primary-text-dark-color)",
                            }}>
                            <Field.Label>Password</Field.Label>
                            <PasswordInput
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e) => {
                                    checkInput(e);
                                }}
                                background={"gray.border"}
                                focusRingColor={
                                    validPassword
                                        ? {
                                              base: "",
                                              _dark: "purple.700",
                                          }
                                        : "red.500"
                                }
                            />
                        </Field.Root>
                    </Fieldset.Content>
                    {/* Submit Button */}

                    <Submit checkInput={{validEmail, validPassword}} />
                </Fieldset.Root>
            </Center>
        </>
    );
}

export default Form;
