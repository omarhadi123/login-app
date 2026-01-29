import {HStack, Separator, Stack, Text} from "@chakra-ui/react";
import GoogleBtn from "./GoogleBtn";
import {NavLink} from "react-router";

function NewAccount() {
    return (
        <>
            <Stack>
                <HStack>
                    <Separator
                        flex={1}
                        borderWidth={"0.25"}
                        borderColor={"brand.100"}
                    />
                    <Text
                        fontSize={"xs"}
                        color={{_dark: "brand.50", base: "brand.200"}}>
                        Or
                    </Text>
                    <Separator
                        flex={1}
                        borderWidth={"0.25"}
                        borderColor={"brand.100"}
                    />
                </HStack>
                <GoogleBtn />
                <HStack mx={"auto"}>
                    <Text
                        fontSize={["xs"]}
                        color={{_dark: "brand.50", base: "brand.200"}}>
                        Don't have an account?
                    </Text>
                    <NavLink to={"/sign-up"}>
                        <Text
                            fontSize={["sm"]}
                            fontWeight={"bold"}
                            transition={"all"}
                            color={"hero.100"}
                            _hover={{
                                color: {_dark: "brand.50", base: "brand.200"},
                            }}>
                            Sign Up
                        </Text>
                    </NavLink>
                </HStack>
            </Stack>
        </>
    );
}

export default NewAccount;
