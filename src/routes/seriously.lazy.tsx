import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/seriously")({
    component: Seriously,
});

function Seriously() {
    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <h1 className="w-52 text-center">
                <span className="font-skyscapers text-4xl">
                    Seriously! This is not a game...
                </span>
            </h1>
            <a href="/close">
                <div className="flex items-center justify-center h-12 w-28 bg-gray-100 rounded-lg">
                    <p>
                        <span className="text-black font-skyscapers">Okay</span>
                    </p>
                </div>
            </a>
        </div>
    );
}
