import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    useEffect(() => {
        localStorage.setItem("time", new Date().toISOString());
    });

    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <h1 className="w-52 text-center">
                <span className="font-skyscapers text-4xl">
                    This is not a game
                </span>
            </h1>
            <a href="/seriously">
                <div className="flex items-center justify-center h-12 w-28 bg-gray-100 rounded-lg">
                    <p>
                        <span className="text-black font-skyscapers">
                            Start
                        </span>
                    </p>
                </div>
            </a>
        </div>
    );
}
