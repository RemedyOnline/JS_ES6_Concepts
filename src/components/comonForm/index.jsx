import CommonInput from "./CommonInput";
import CommonRadio from "./CommonRadio";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
  CHECKBOX: "checkbox",
  DATE: "date",
  PASSWORD: "password",
  FILE: "file",
  RADIO: "radio",
  TEL: "tel",
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
      case formTypes.RADIO:
        content = (
          <div className="my-3">
            <label className="block mb-2">{getCurrentFormElement.label}</label>
            <section className="flex gap-4">
              {getCurrentFormElement.options.map((option, index) => (
                <CommonRadio
                  key={`${getCurrentFormElement.id}-${index}`}
                  name={getCurrentFormElement.name}
                  id={`${getCurrentFormElement.id}-${index}`}
                  label={option.label}
                  value={option.value}
                  checked={
                    formData[getCurrentFormElement.name] === option.value
                  }
                  type={getCurrentFormElement.type}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              ))}
            </section>
          </div>
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
      <h2 className="text-center p-1 m-1 bg-slate-200">Common Form</h2>
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
