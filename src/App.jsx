import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent1";
import ES6Concepts from "./components/ES6Concepts";
import FunctionalComponent from "./components/FunctionalComponent1";
// import Miscellaneous from "./components/Miscellaneous";
import ProductList from "./components/products";
import TableOfContent from "./components/TableOfContent";

const dummyProductsData = ["product1", "product2", "product3"];

function App() {
	return (
		<>
			<h1 className="text-3xl font-semibold mb-4">ES6 Concepts Tutorials</h1>
			<section className="mx-12">
				{/* <ES6Concepts /> */}
				<TableOfContent />
				<ClassBasedComponent />
				{/* <FunctionalComponent /> */}
				{/* <Miscellaneous /> */}
				{/* <ProductList productKey={dummyProductsData} name="laptop" price={240} /> */}
			</section>
		</>
	);
}

export default App;
