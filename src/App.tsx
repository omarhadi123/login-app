import {Container, ClientOnly, Skeleton, IconButton} from "@chakra-ui/react";
import "./App.css";
import Form from "@features/form/components/Form";
import {useColorMode} from "./components/ui/color-mode";
import {LuMoon, LuSun} from "react-icons/lu";

function App() {
    const {toggleColorMode, colorMode} = useColorMode();
    return (
        <>
            <Container
                css={{
                    "--primary-color": "colors.gray.emphasized",
                    "--primary-text-dark-color": "colors.purple.200",
                    "--primary-text-light-color": "colors.purple.950",
                }}
                width={"full"}
                height={"dvh"}
                background={"var(--primary-color)"}>
                <ClientOnly fallback={<Skeleton boxSize="8" />}>
                    <IconButton
                        onClick={toggleColorMode}
                        variant="outline"
                        size="sm">
                        {colorMode === "light" ? <LuSun /> : <LuMoon />}
                    </IconButton>
                </ClientOnly>
                <Form />
            </Container>
        </>
    );
}

export default App;
