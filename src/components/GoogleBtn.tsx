import {Button, Icon, Text} from "@chakra-ui/react";
import {FcGoogle} from "react-icons/fc";

function GoogleBtn() {
    return (
        <>
            <Button mt={"3"} mb={"1"} _hover={{opacity: "0.9"}}>
                <Icon>
                    <FcGoogle />
                </Icon>
                <Text color={{_dark: "brand.200", base: "brand.50"}}>
                    Continue with google
                </Text>
            </Button>
        </>
    );
}

export default GoogleBtn;
