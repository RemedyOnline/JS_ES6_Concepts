export const LoginFormElements = [
  {
    name: "email",
    id: "email",
    placeholder: "Enter your email...",
    label: "Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    id: "password",
    placeholder: "Enter your password...",
    label: "Password",
    type: "password",
    componentType: "input",
  },
];

export const RegisterFormElements = [
  {
    name: "fName",
    id: "fName",
    placeholder: "Enter your First Name...",
    label: "First Name",
    type: "text",
    componentType: "input",
  },
  {
    name: "lName",
    id: "lName",
    placeholder: "Enter your Last Name...",
    label: "Last Name",
    type: "text",
    componentType: "input",
  },
  {
    name: "email",
    id: "email",
    placeholder: "Enter your email...",
    label: "Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "age",
    id: "age",
    placeholder: "Enter your age...",
    label: "Age",
    type: "number",
    componentType: "input",
  },
  {
    name: "gender",
    id: "gender",
    label: "Gender",
    type: "radio",
    componentType: "radio",
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
  },
  {
    name: "password",
    id: "password",
    placeholder: "Enter your password...",
    label: "Password",
    type: "password",
    componentType: "input",
  },
];

export const ContactFormElements = [
  // ... other form elements ...
  {
    name: "preferredContact",
    id: "preferredContact",
    label: "Preferred Contact Method",
    type: "radio",
    componentType: "radio",
    options: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
  },
  // ... other form elements ...
];
