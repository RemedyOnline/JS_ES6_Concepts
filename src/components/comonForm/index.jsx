import CommonInput from "./CommonInput";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formElements = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) => {
  function renderFormElement(getCurrentFormElement) {
    let content = null;

    switch (getCurrentFormElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            name={getCurrentFormElement.name}
            label={getCurrentFormElement.label}
            id={getCurrentFormElement.id}
            placeholder={getCurrentFormElement.placeholder}
            value={formData[getCurrentFormElement.name]}
            type={getCurrentFormElement.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            name={getCurrentFormElement.name}
            label={getCurrentFormElement.label}
            id={getCurrentFormElement.id}
            placeholder={getCurrentFormElement.placeholder}
            value={formData[getCurrentFormElement.name]}
            type={getCurrentFormElement.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return content;
  }

  return (
    <div>
      <h2>Common Form</h2>
      <form onSubmit={onHandleSubmit}>
        {formElements?.length
          ? formElements.map((singleFormElement) =>
              renderFormElement(singleFormElement, formData, setFormData),
            )
          : null}
        <div>
          <button
            type="submit"
            className="p-3 rounded-full bg-blue-300 flex items-center justify-center mx-auto my-3"
          >
            {buttonText || "Submitt!"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommonForm;
