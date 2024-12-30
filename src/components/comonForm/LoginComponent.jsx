import { useState } from "react";
import CommonForm from ".";
import { LoginFormElements } from "../../config/loginConfig";

const initialFormValues = {
  email: "",
  password: "",
};
const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormValues);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData, "data....");
    setLoginFormData(initialFormValues);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold underline italic">Login Component</h2>
      <CommonForm
        formElements={LoginFormElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default LoginComponent;
