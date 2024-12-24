import "./App.css";
import ES6Concepts from "./components/ES6Concepts";
import TableOfContent from "./components/TableOfContent";

function App() {
	return (
		<>
			<h1>ES6 Concepts Tutorials</h1>
			<section>
				<TableOfContent />
				<ES6Concepts />
			</section>
		</>
	);
}

export default App;
