import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/trust")({
    component: About,
});

function About() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate({ to: "/timer" });
        }, 5000);
    }, [navigate]);

    return (
        <div className="h-screen flex flex-col items-center justify-between pt-28 pb-8">
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
            <div className="flex flex-col justify-center items-center">
                <p className="text-center font-skyscapers w-52 pb-4 translate-x-12 rotate-12">
                    I said properly We do not want a repeat of last time
                </p>
                <div className="flex items-center justify-center h-12 w-28 bg-gray-300 rounded-lg">
                    <p>
                        <span className="text-gray-500 font-skyscapers">
                            Continue
                        </span>
                    </p>
                </div>
                <p className="text-center text-sm font-skyscapers w-64 pt-5">
                    I don't trust you to do it now. I guess if you need
                    something done you need to do it yourself.
                </p>
            </div>
        </div>
    );
}
