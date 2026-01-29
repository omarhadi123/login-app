import {Container} from "@chakra-ui/react";
import type {FormEvent, ReactNode} from "react";

interface FormProps {
    onSubmit?: (e: FormEvent) => void;
    children: ReactNode;
}

function Form({onSubmit, children}: FormProps) {
    return (
        <>
            <Container
                // w={["full", "md", "lg", "xl"]}

                maxW={"lg"}
                py={{base: "8", md: "16"}}
                px={{base: "0", sm: "8"}}
                bgColor={{_dark: "brand.300", base: "tertiary"}}
                shadow={"lg"}
                rounded={"md"}>
                <form method="post" onSubmit={onSubmit}>
                    {children}
                </form>
            </Container>
        </>
    );
}

export default Form;
