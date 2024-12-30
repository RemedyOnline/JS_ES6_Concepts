import PropTypes from "prop-types";

const CommonRadio = ({ name, id, label, value, checked, onChange, type }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

CommonRadio.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default CommonRadio;
