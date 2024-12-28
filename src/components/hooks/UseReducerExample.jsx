import { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStyle: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

const reducer = (state, action) => {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showTextFlag: false,
      };
    case SHOW_TEXT:
      return {
        ...state,
        showTextFlag: true,
      };
    case CHANGE_TEXT_STYLE:
      return {
        ...state,
        changeTextStyle: !state.changeTextStyle,
      };

    default:
      return state;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="text-center flex flex-col gap-5 justify-center items-center">
      {state.showTextFlag ? (
        <p
          className={
            state.changeTextStyle
              ? "bg-red-200 text-red-900 p-2 w-full"
              : "bg-green-200 text-green-900 p-2 w-full"
          }
        >
          I&apos;m so glad I understand useReducer now too bro!
        </p>
      ) : (
        ""
      )}
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: HIDE_TEXT })}
          className="p-2 bg-cyan-700 h-fit w-fit rounded-lg"
        >
          Hide Text
        </button>
        <button
          onClick={() => dispatch({ type: SHOW_TEXT })}
          className="p-2 bg-yellow-600 h-fit w-fit rounded-lg"
        >
          Show Text
        </button>
        <button
          onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}
          className="p-2 bg-purple-600 h-fit w-fit rounded-lg"
        >
          Toggle Text Style
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
