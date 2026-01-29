import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {AuthProvider} from "./store/AuthProvider.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import {Provider} from "./components/ui/provider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {path: "/sign-up", element: <SignUpPage />},
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </Provider>
    </StrictMode>,
);
