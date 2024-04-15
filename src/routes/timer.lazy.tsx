import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/timer")({
    component: About,
});

function About() {
    const [timer, setTimer] = useState(7);
    const navigation = useNavigate();

    useEffect(() => {
        setInterval(() => {
            if (timer > 0) setTimer(timer - 1);
        }, 1000);
    }, [timer]);

    useEffect(() => {
        if (timer <= 0) {
            navigation({ to: "/win" });
        }
    }, [timer, navigation]);

    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <div className="flex flex-col justify-center items-center">
                <h1 className="w-72 text-center">
                    <span className="font-skyscapers text-4xl">
                        Closing Game...
                    </span>
                </h1>
                <h2 className="pt-6 text-center font-skyscapers w-72">
                    I don't have fingers So I need a different way of closing
                    the NOT game
                </h2>
            </div>
            <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full">
                <p>
                    <span className="text-black font-skyscapers">{timer}</span>
                </p>
            </div>
        </div>
    );
}
