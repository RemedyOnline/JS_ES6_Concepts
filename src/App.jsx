import "./App.css";
import ES6Concepts from "./components/ES6Concepts";
import TableOfContent from "./components/TableOfContent";

function App() {
	return (
		<>
			<h1 className="text-3xl font-semibold mb-4">ES6 Concepts Tutorials</h1>
			<section className="mx-12">
				<TableOfContent />
				<ES6Concepts />
			</section>
		</>
	);
}

export default App;
