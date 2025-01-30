import { useReducer } from "react";

const initialState = { count: 0 };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const UseReducerGPTExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="my-5 text-black">
      <h2 className="text-2xl text-center underline font-bold">
        UseReducerGPTExample
      </h2>
      <div className="flex flex-col gap-2 my-3 items-center text-xl">
        <p>{`Counter = ${state.count}`}</p>
        <div>
          <button
            onClick={() => dispatch({ type: DECREMENT })}
            className="p-2 border m-2 border-gray-700"
          >
            ➖
          </button>
          <button
            onClick={() => dispatch({ type: RESET })}
            className="p-2 border m-2 border-gray-700"
          >
            🔁
          </button>
          <button
            onClick={() => dispatch({ type: INCREMENT })}
            className="p-2 border m-2 border-gray-700"
          >
            ➕
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerGPTExample;
