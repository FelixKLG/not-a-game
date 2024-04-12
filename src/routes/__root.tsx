import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="max-h-screen min-h-screen max-w-screen min-w-screen">
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </>
    ),
});
