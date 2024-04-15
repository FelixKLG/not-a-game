import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="max-h-screen min-h-screen max-w-screen min-w-screen overflow-clip">
                <Outlet />
            </div>
        </>
    ),
});
