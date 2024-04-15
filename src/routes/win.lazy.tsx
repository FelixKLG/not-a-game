import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/win")({
    component: About,
});

function About() {
    const firstLoadTimeString =
        localStorage.getItem("time") ?? new Date().toISOString();

    const firstLoadTime = new Date(Date.parse(firstLoadTimeString));

    const timeNow = new Date();

    const timePlayed = (timeNow.getTime() - firstLoadTime.getTime()) / 1000;

    useEffect(() => {
        new Audio("/win.mp3").play();
    }, []);
    return (
        <div className="h-screen flex flex-col items-center justify-between py-28">
            <div className="flex flex-col items-center">
                <h1 className="w-52 text-center">
                    <span className="font-skyscapers text-4xl">You WIN?</span>
                </h1>
                <h2 className="pt-5 w-52 text-center">
                    <span className="font-skyscapers text-lg">
                        Well really I win I wasted your time. This is a not
                        game.
                    </span>
                </h2>
            </div>
            <div>
                <img src="win.gif" alt="rick roll" className="max-w-72" />
            </div>
            <h2 className="text-center">
                Time Wasted: {Math.floor(timePlayed)} Seconds
                <br />
                <span>(This is your score)</span>
            </h2>
        </div>
    );
}
