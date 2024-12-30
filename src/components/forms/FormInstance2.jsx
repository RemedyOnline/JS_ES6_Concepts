import { useState } from "react";

const FormInstance2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  console.log(formData);

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-2xl italic underline font-medium text-green-600">
        Handling Input Universally From a Common Function...
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
            onChange={handleInputChange}
            placeholder="Enter your full name..."
            className="bg-neutral-700 p-2 rounded-lg"
          />
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your full name..."
            className="bg-neutral-700 p-2 rounded-lg"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter your full name..."
            className="bg-neutral-700 p-2 rounded-lg"
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message bro..."
            className="bg-neutral-700 p-2 rounded-lg"
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

export default FormInstance2;
