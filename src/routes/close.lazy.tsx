import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/close")({
    component: Close,
});

function Close() {
    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <h1 className="w-52 text-center">
                <span className="font-skyscapers text-4xl">
                    Please close the not game
                </span>
            </h1>
            <a href="/error">
                <div className="flex items-center justify-center h-12 w-28 bg-red-300 rounded-lg">
                    <p>
                        <span className="text-red-500 font-skyscapers">Exit</span>
                    </p>
                </div>
            </a>
        </div>
    );
}
