import {Button} from "@chakra-ui/react";

interface SubmitBtnProps {
    isDisabled: boolean;
    label: string;
}
function SubmitBtn({isDisabled, label}: SubmitBtnProps) {
    return (
        <>
            <Button
                disabled={isDisabled}
                type="submit"
                textTransform={"capitalize"}
                mt={"6"}
                mb={"3"}
                bgColor={"hero.200"}
                color={"brand.50"}
                _hover={{opacity: "0.9"}}>
                {label}
            </Button>
        </>
    );
}

export default SubmitBtn;
