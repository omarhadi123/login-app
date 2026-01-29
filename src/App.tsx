import {Container} from "@chakra-ui/react";
import "./App.css";
import {Outlet} from "react-router";
import {ColorModeButton} from "./components/ui/color-mode";

function App() {
    return (
        <>
            <Container
                h={"dvh"}
                bgColor={{_dark: "brand.100", base: "#ffffff"}}
                px={["2", "4", "8", "16"]}
                display={"grid"}
                placeItems={"center"}>
                <ColorModeButton position={"absolute"} right={"10"} top={"5"} />
                <Outlet />
            </Container>
        </>
    );
}

export default App;
