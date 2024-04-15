import { createLazyFileRoute } from "@tanstack/react-router";
import "../error-fuckery.css";

export const Route = createLazyFileRoute("/error")({
    component: ExitError,
});

function ExitError() {
    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <h1 className="w-52 text-center">
                <span className="font-skyscapers text-4xl text-red-300">
                    Error! Failed to close the NOT GAME!
                </span>
            </h1>
            <a href="/recovery">
                <div className="flex items-center justify-center h-12 w-28 bg-red-300 rounded-lg">
                    <p>
                        <span className="text-red-500 font-skyscapers">
                            Recover
                        </span>
                    </p>
                </div>
            </a>
        </div>
    );
}
