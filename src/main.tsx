import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Provider} from "./components/ui/provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import CheckPage from "./pages/CheckPage.tsx";
import {ContextProvider} from "@store/contextProvider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/check",
        element: <CheckPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </Provider>
    </StrictMode>
);
