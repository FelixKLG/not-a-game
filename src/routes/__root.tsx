import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="max-h-screen min-h-screen max-w-screen min-w-screen overflow-clip md:flex md:flex-row md:justify-center gap-72">
                <div className="hidden md:flex items-center justify-center md:pl-20">
                    <img className="h-screen"
                        src="/thesurf.gif"
                        alt="Subway Surfers Attention Grabber"
                    />
                </div>
                <div className="md:pr-20">
                    <Outlet />
                </div>
            </div>
        </>
    ),
});
