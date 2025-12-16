import {loading} from "@/utils/loading";
import {Button} from "@chakra-ui/react";
import {useState} from "react";
import {useNavigate} from "react-router";

function Submit({
    checkInput,
}: {
    checkInput: {validEmail: boolean; validPassword: boolean};
}) {
    const navigate = useNavigate();
    const [pending, setPending] = useState<boolean>(false);

    async function handleAction() {
        await loading();
        navigate("/check");
    }

    return (
        <>
            <Button
                onClick={() => {
                    handleAction();
                    setPending(true);
                }}
                disabled={!checkInput.validEmail || !checkInput.validPassword}
                marginTop={"8"}
                type="submit"
                loading={pending}
                loadingText={"Sendling"}
                spinnerPlacement="end"
                color={"purple.100"}
                background={"purple.900"}
                _hover={{background: "purple.800"}}>
                Login
            </Button>
        </>
    );
}

export default Submit;
