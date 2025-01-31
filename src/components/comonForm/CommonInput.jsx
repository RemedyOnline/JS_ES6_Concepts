import PropTypes from "prop-types";

const CommonInput = ({
  name,
  id,
  placeholder,
  label,
  value,
  onChange,
  type,
}) => {
  // items in the prop here tells us that we will be receiving them, not sending...
  return (
    <div className="my-3 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder || "Enter value here..."}
        onChange={onChange}
        className="bg-neutral-300 border-slate-500 p-2 rounded-lg border"
      />
    </div>
  );
};

export default CommonInput;

CommonInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
