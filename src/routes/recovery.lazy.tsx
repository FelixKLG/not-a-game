import { createLazyFileRoute } from "@tanstack/react-router";
import "../recovery-fuckery.css";

export const Route = createLazyFileRoute("/recovery")({
    component: Recovery,
});

function Recovery() {
    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <h1 className="w-52 text-center">
                <span className="font-skyscapers text-4xl text-emerald-300">
                    Recovered the not game?
                </span>
            </h1>
            <a href="/properly">
                <div className="flex items-center justify-center h-12 w-28 bg-emerald-300 rounded-lg">
                    <p>
                        <span className="text-emerald-600 font-skyscapers">
                            Continue
                        </span>
                    </p>
                </div>
            </a>
        </div>
    );
}
