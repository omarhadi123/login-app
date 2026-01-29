import {useAuth} from "@/hooks/useAuth";
import {
    CheckboxControl,
    CheckboxHiddenInput,
    CheckboxLabel,
    CheckboxRoot,
} from "@chakra-ui/react";

function CheckBox() {
    const {isAcceptTermsAndConditions, setIsAcceptTermsAndConditions} =
        useAuth();
    return (
        <>
            <CheckboxRoot
                checked={isAcceptTermsAndConditions}
                onChange={() =>
                    setIsAcceptTermsAndConditions(!isAcceptTermsAndConditions)
                }>
                <CheckboxHiddenInput />
                <CheckboxControl />
                <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
            </CheckboxRoot>
        </>
    );
}

export default CheckBox;
