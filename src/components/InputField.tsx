import {FieldErrorText, FieldLabel, FieldRoot, Input} from "@chakra-ui/react";
import {PasswordInput} from "./ui/password-input";
import type React from "react";

interface InputFieldProps {
    type: string;
    name?: string;
    onChange: (text: string) => void;
    isValid?: boolean;
}

function InputField({type, onChange, isValid}: InputFieldProps) {
    const typeLabel = (
        type === "password"
            ? "password"
            : type === "email"
              ? "email"
              : type === "text"
                ? "username"
                : "confirm-password"
    ).replace(/\W+/, " ");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e.target.value);
    }
    return (
        <>
            <FieldRoot invalid={isValid}>
                <FieldLabel
                    textTransform={"capitalize"}
                    color={{_dark: "brand.50", base: "brand.200"}}>
                    {typeLabel}
                </FieldLabel>
                {typeLabel === "password" ||
                typeLabel === "confirm-password" ? (
                    <PasswordInput
                        onChange={handleChange}
                        bgColor={{_dark: "brand.200", base: "#fff"}}
                        color={{_dark: "brand.50", base: "brand.200"}}
                        borderColor={{_dark: "brand.300", base: "brand.50"}}
                        focusRingColor={{_dark: "hero.100", base: "brand.200"}}
                        _invalid={{
                            borderColor: "red.500",
                            focusRingColor: "red.500",
                        }}
                    />
                ) : (
                    <Input
                        type="text"
                        onChange={handleChange}
                        bgColor={{_dark: "brand.200", base: "#fff"}}
                        color={{_dark: "brand.50", base: "brand.200"}}
                        borderColor={{_dark: "brand.300", base: "brand.50"}}
                        focusRingColor={{_dark: "hero.100", base: "brand.200"}}
                        _invalid={{
                            borderColor: "red.500",
                            focusRingColor: "red.500",
                        }}
                    />
                )}
                <FieldErrorText>Invalid {typeLabel}</FieldErrorText>
            </FieldRoot>
        </>
    );
}

export default InputField;
