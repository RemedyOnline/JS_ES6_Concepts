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
import Miscellaneous from "./components/Miscellaneous";
import ProductList from "./components/products";
import TableOfContent from "./components/TableOfContent";
import UserFetching from "./components/users";
import ContextText from "./components/contextExamples/ContextText";
import ContextButton from "./components/contextExamples/ContextButton";
import UseReducerExample from "./components/hooks/UseReducerExample";
import UseReducerGPTExample from "./components/hooks/UseReducerGPTExample";
import UseReducerExample2 from "./components/hooks/UseReducerGPTExample2";
import FormComponent from "./components/forms";
import LoginComponent from "./components/comonForm/LoginComponent";
import RegisterComponent from "./components/comonForm/RegisterComponent";
import ContactMeComponent from "./components/comonForm/ContactMeComponent";
import { useContext } from "react";
import GlobalContext from "./contexts/UseContextHook";

const dummyProductsData = ["product1", "product2", "product3"];

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <section
      className={`${theme === "lightMode" ? "bg-slate-100" : "bg-slate-950"}  text-black min-h-screen h-full`}
    >
      <h1
        className={`${theme === "lightMode" ? "text-black" : "text-white"} text-center text-3xl font-bold pt-5`}
      >
        ES6 Concepts Tutorials
      </h1>
      <section className="mx-12 space-y-12 py-12">
        {/* <ES6Concepts /> */}
        {/* <TableOfContent /> */}
        {/* <ClassBasedComponent /> */}
        {/* <FunctionalComponent /> */}
        {/* <ProductList productKey={dummyProductsData} name="laptop" price={240} /> */}
        {/* <Miscellaneous /> */}
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        {/* <UseEffectWithEmptyArray /> */}
        {/* <UseEffectWithDependency /> */}
        {/* <UseEffectWithNoDependency /> */}
        {/* <UserFetching /> */}
        {/* <div className="flex gap-5 items-center">
          <ContextText />
          <ContextButton />
        </div> */}
        {/* <div>
          <UseReducerExample />
          <UseReducerGPTExample />
          <UseReducerExample2 />
        </div> */}
        {/* <FormComponent /> */}
        <div className="flex gap-5 justify-between">
          <LoginComponent />
          <RegisterComponent />
          <ContactMeComponent />
        </div>
      </section>
    </section>
  );
}

export default App;
