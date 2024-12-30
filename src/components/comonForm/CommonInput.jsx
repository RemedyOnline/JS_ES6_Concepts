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
  return (
    <div className="my-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder || "Enter value here..."}
        onChange={onChange}
        className="bg-neutral-700 p-2 rounded-lg border border-neutral-500 "
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
