import { useState } from "react";
import CommonForm from ".";
import { ContactFormElements } from "../../config/loginConfig";

const initialFormValues = {
  email: "",
  password: "",
};

const ContactMeComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormValues);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData, "data....");
    setLoginFormData(initialFormValues);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold underline italic">
        Contact me bro...!
      </h2>
      <div>
        <CommonForm
          formElements={ContactFormElements}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={"Login"}
          onHandleSubmit={onHandleSubmit}
        />
      </div>
    </div>
  );
};

export default ContactMeComponent;
