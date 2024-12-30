import PropTypes from "prop-types";

const CommonSelect = ({
  name,
  id,
  label,
  value1,
  value2,
  onChange,
  type,
  option1,
  option2,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id} type={type || "radio"} onChange={onChange}>
        <option value={value1}>{option1}</option>
        <option value={value2}>{option2}</option>
      </select>
    </div>
  );
};

export default CommonSelect;

CommonSelect.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.select,
};
