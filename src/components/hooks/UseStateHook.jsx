import { useState } from "react";

const UseStateHook = () => {
	const initialValue = false;
	const [flag, setFlag] = useState(initialValue);
	const [counter, setCounter] = useState(0);
	const threshold = 10;

	const handleSwitch = () => {
		setFlag((flag) => !flag);
		// setFlag(!flag);
		console.log(flag);
	};

	const handleSubtraction = () => {
		setCounter((counter) => counter - 1);
	};
	const handleAddition = () => {
		const newCount = counter + 1;
		setCounter(newCount);
		if (newCount === threshold) {
			resetCounter();
		}
	};

	const resetCounter = () => {
		setCounter(0);
	};

	return (
		<div className="text-blue-600 text-center mx-auto mb-12">
			<h2
				className="text-2xl font-bold underline mb-2
         "
			>
				UseStateLesson page
			</h2>
			{flag ? (
				<p className="italic">State Dependent Sentence...</p>
			) : (
				<p className="font-mono font-bold">State Dependent Sentence...</p>
			)}
			<button
				onClick={handleSwitch}
				className="p-2 rounded-xl bg-blue-200 font-medium m-2"
			>
				Switch State
			</button>
			<div>
				<button
					onClick={handleSubtraction}
					className="p-2 rounded-xl bg-blue-200 font-medium m-2"
				>
					➖
				</button>
				<span className=" px-4 py-2 border text-lg font-bold">{counter}</span>
				<button
					onClick={handleAddition}
					className="p-2 rounded-xl bg-blue-200 font-medium m-2"
				>
					➕
				</button>
			</div>
		</div>
	);
};

export default UseStateHook;
