const TableOfContent = () => {
	return (
		<section className="space-y-5 text-lg">
			<ol className="list-decimal ml-6 space-y-5">
				<li>
					Logical Operators...
					<ul className="list-disc ml-5">
						<li>Logical AND</li>
						<li>Logical OR</li>
					</ul>
				</li>
				<li>Templete Literals</li>
				<li>Ternary Operator</li>
				<li>Destrusturing Objects</li>
				<li>Destrusturing Arrays</li>
				<li>Default Parameters</li>
				<li>Spread Operators</li>
				<li>Rest Operators</li>
				<li>
					ES6 Array Methods...
					<ul className="list-disc ml-5">
						<li>map</li>
						<li>find</li>
						<li>filter</li>
						<li>some</li>
						<li>every</li>
						<li>include</li>
						<li>indexOf</li>
						<li>findIndex</li>
						<li>Logical OR</li>
					</ul>
				</li>
				<li>Ternary Operator</li>
				<li>Ternary Operator</li>
			</ol>
			<details className="p-1  w-1/2 rounded-lg bg-gray-600">
				<summary className="bg-gray-500 p-2 rounded-xl shadow-xl mb-2">
					Hello
				</summary>
				Kofi is a boy
			</details>
			<div>
				<div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 bg-red-200 group">
					<div className="group-hover:transform group-hover:scale-110 group-hover:-rotate-6 bg-green-200">
						<img src="/vite.svg" alt="" loading="lazy" className="w-48 h-48" />
					</div>
					<div className="col-start-3 group-hover:transform group-hover:scale-95 group-hover:-rotate-45 group-hover:translate-x-2 group-hover:translate-y-24 bg-blue-200">
						<img src="/vite.svg" alt="" loading="lazy" className="w-48 h-48" />
					</div>
					<div className="group-hover:transform group-hover:scale-125 group-hover:rotate-12 group-hover:translate-y-11 bg-yellow-200">
						<img src="/vite.svg" alt="" loading="lazy" className="w-48 h-48" />
					</div>
					<div className="group-hover:transform group-hover:translate-y-24 group-hover:-rotate-12 bg-purple-200">
						<img src="/vite.svg" alt="" loading="lazy" className="w-48 h-48" />
					</div>
					<div className="row-start-1 col-start-2 col-span-2 group-hover:transform group-hover:translate-x-20 group-hover:translate-y-4 group-hover:scale-110 group-hover:rotate-12 bg-cyan-200">
						<img src="/vite.svg" alt="" loading="lazy" className="w-48 h-48" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TableOfContent;
