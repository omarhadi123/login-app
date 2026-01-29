import {Heading} from "@chakra-ui/react";

function FormHeading({label}: {label: string}) {
    return (
        <>
            <Heading
                as={"h1"}
                textTransform={"capitalize"}
                fontSize={["2xl", "3xl", "4xl"]}
                color={{_dark: "brand.50", base: "brand.200"}}
                mb={"9"}>
                {label}
            </Heading>
        </>
    );
}

export default FormHeading;
