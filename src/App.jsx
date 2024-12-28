import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent1";
import ES6Concepts from "./components/ES6Concepts";
import FunctionalComponent from "./components/FunctionalComponent1";
import UseContextHook from "./contexts/UseContextHook";
import UseEffectHook from "./components/hooks/UseEffectHook";
import UseEffectWithDependency from "./components/hooks/UseEffectWithDependency";
import UseEffectWithEmptyArray from "./components/hooks/UseEffectWithEmptyArray";
import UseEffectWithNoDependency from "./components/hooks/UseEffectWithNoDependency";
import UseStateHook from "./components/hooks/UseStateHook";
// import Miscellaneous from "./components/Miscellaneous";
import ProductList from "./components/products";
import TableOfContent from "./components/TableOfContent";
import UserFetching from "./components/users";
import ContextText from "./components/contextExamples/ContextText";
import ContextButton from "./components/contextExamples/ContextButton";
import UseReducerExample from "./components/hooks/UseReducerExample";
import UseReducerGPTExample from "./components/hooks/UseReducerGPTExample";
import UseReducerExample2 from "./components/hooks/UseReducerGPTExample2";

const dummyProductsData = ["product1", "product2", "product3"];

function App() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-4">ES6 Concepts Tutorials</h1>
      <section className="mx-12 space-y-12 my-12">
        {/* <ES6Concepts /> */}
        <TableOfContent />
        {/* <ClassBasedComponent /> */}
        {/* <FunctionalComponent /> */}
        {/* <Miscellaneous /> */}
        {/* <ProductList productKey={dummyProductsData} name="laptop" price={240} /> */}
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        {/* <UseEffectWithEmptyArray /> */}
        {/* <UseEffectWithDependency /> */}
        {/* <UseEffectWithNoDependency /> */}
        {/* <UserFetching /> */}
        <div className="flex gap-5 items-center">
          <ContextText />
          <ContextButton />
        </div>
        <div>
          <UseReducerExample />
          <UseReducerGPTExample />
          <UseReducerExample2 />
        </div>
      </section>
    </section>
  );
}

export default App;
