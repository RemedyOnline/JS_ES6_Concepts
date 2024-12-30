import { useState } from "react";
import CommonForm from ".";
import { RegisterFormElements } from "../../config/loginConfig";

const initialFormValues = {
  fName: "",
  lName: "",
  email: "",
  age: "",
  password: "",
};

const RegisterComponent = () => {
  const [registerFormData, setRegisterFormData] = useState(initialFormValues);

  function onHandleRegisterSubmit(e) {
    e.preventDefault();
    console.log(registerFormData, "registtererrr.");
    setRegisterFormData(initialFormValues);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold underline italic">
        Register Component
      </h2>
      <div>
        <CommonForm
          formElements={RegisterFormElements}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          buttonText={"Register"}
          onHandleSubmit={onHandleRegisterSubmit}
        />
      </div>
    </div>
  );
};

export default RegisterComponent;
