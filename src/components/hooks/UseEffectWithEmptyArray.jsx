import { useEffect } from "react";
import { useState } from "react";

const UseEffectWithEmptyArray = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		console.log("Fetching data...");
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((json) => setData(json));
	}, []);

	return (
		<div>
			<h2 className="text-2xl font-bold underline mb-2">
				UseEffectWithEmptyArray
			</h2>
			{data ? <p>{data.title}</p> : <p>Loading...</p>}
		</div>
	);
};

export default UseEffectWithEmptyArray;
