import { useReducer } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "updateForm":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return {
        name: "",
        email: "",
        password: "",
      };

    default:
      return state;
  }
};

const UseReducerExample2 = () => {
  const [formState, dispatch] = useReducer(formReducer, initialValues);
  console.log(formState);

  const handleChange = (e) => {
    dispatch({
      type: "updateForm",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClick = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h2 className="text-2xl font-bold underline italic">
        UseReducerExample2
      </h2>
      <div className="flex flex-col items-center justify-center gap-2">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          className="p-2 rounded-lg bg-slate-200 text-black"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formState.email}
          className="p-2 rounded-lg bg-slate-200 text-black"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formState.password}
          className="p-2 rounded-lg bg-slate-200 text-black"
        />
      </div>
      <button
        onClick={handleClick}
        className="p-2 bg-slate-500 text-slate-950 rounded-full "
      >
        RESET
      </button>
    </div>
  );
};

export default UseReducerExample2;
