"use client"
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import TodayDate from "./TodayDate";
import Welcome from "./commands/Welcome";
import Help from "./commands/Help";
import EnteredCmd from "./EnteredCmd";
import CmdUserInput from "./CmdUserInput";
import renderCmd from "@/lib/renderCmd"

export default function TerminalBox() {
    const [enteredCmd, setEnteredCmd] = useState([
		{
			cmd: "",
			Component: Welcome,
			time: new Date().toLocaleTimeString(),
		},
		{
			cmd: "help",
			Component: Help,
			time: new Date().toLocaleTimeString(),
		},
	]);
	const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
		dummyRef.current.scrollIntoView({ behavior: "auto" });
	}, [enteredCmd]);
	useEffect(() => {
		document.body.addEventListener("keydown", handleKeyEvent);
	}, []);
	const handleSubmit = (cmd: string) => {
		setEnteredCmd((currentCmd) => [
			...currentCmd,
			{ ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
		]);
	};

	const handleKeyEvent = (e: KeyboardEvent) => {
		if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
			setEnteredCmd([]);
		}
	};
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
                <TodayDate />
                <EnteredCmd enteredCmd={enteredCmd} />
                <CmdUserInput onSubmit={handleSubmit} />
				<div ref={dummyRef}></div>


            </div>
        </div>
    );
}
