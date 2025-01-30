import { useState } from "react";

const FormInstance3 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  console.log(formData);

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-2xl italic underline font-medium text-green-600">
        Handling Input Universally From Individual Callback Function...
      </h2>
      <form
        onSubmit={handleFormSubmission}
        className="space-y-3 items-center justify-center flex flex-col"
      >
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={(event) => {
              const { name, value } = event.target;
              setFormData({
                ...formData,
                [name]: value,
              });
            }}
            placeholder="Enter your full name..."
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          />
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={(event) => {
              const { name, value } = event.target;
              setFormData({
                ...formData,
                [name]: value,
              });
            }}
            placeholder="Enter your full name..."
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={(event) => {
              const { name, value } = event.target;
              setFormData({
                ...formData,
                [name]: value,
              });
            }}
            placeholder="Enter your full name..."
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={(event) => {
              const { name, value } = event.target;
              setFormData({
                ...formData,
                [name]: value,
              });
            }}
            placeholder="Enter your message bro..."
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-5 py-3 bg-slate-700 mx-auto w-fit rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FormInstance3;
