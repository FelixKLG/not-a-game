import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/properly")({
    component: Properly,
});

function Properly() {
    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <div className="flex flex-col items-center">
                <h1 className="w-52 text-center">
                    <span className="font-skyscapers text-4xl">
                        Please close the not game
                    </span>
                </h1>
                <h2 className="pt-5">
                    <span className="font-skyscapers text-lg">
                        Properly this time
                    </span>
                </h2>
            </div>
            <a href="/trust">
                <div className="flex items-center justify-center h-12 w-28 bg-gray-100 rounded-lg">
                    <p>
                        <span className="text-black font-skyscapers">
                            Continue
                        </span>
                    </p>
                </div>
            </a>
        </div>
    );
}
