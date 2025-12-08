import {Container, Spinner} from "@chakra-ui/react";

function Loading() {
    return (
        <>
            <Container>
                <Spinner color={"teal.500"} size={"lg"} />
            </Container>
        </>
    );
}

export default Loading;
