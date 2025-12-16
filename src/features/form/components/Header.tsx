import {Heading, Stack} from "@chakra-ui/react";

function Header() {
    return (
        <>
            <Stack marginBottom={["4", "8", "12"]}>
                <Heading
                    as={"h1"}
                    fontSize={["3xl", "4xl", "5xl"]}
                    color={{
                        base: "var(--primary-text-light-color)",
                        _dark: "var(--primary-text-dark-color)",
                    }}>
                    Login
                </Heading>
            </Stack>
        </>
    );
}

export default Header;
