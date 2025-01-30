import { useState } from "react";

const FormInstance1 = () => {
  // start by declaring a state for each input field...
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [subjectInputValue, setSubjectInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");

  // then you create a function to handle each input distinctively...
  const handleNameInputChange = (event) => {
    const { value } = event.target; // destructuring VALUE from EVENT.TARGET...
    console.log("Name...:", value);
    setNameInputValue(value);
    //   setNameInputValue(event.target.value); // or you can also do this to access the value directly...
  };

  const handleEmailInputChange = (event) => {
    const { value } = event.target;
    console.log("Email...:", value);
    setEmailInputValue(value);
  };

  const handleSubjectInputChange = (event) => {
    const { value } = event.target;
    console.log("Subject...:", value);
    setSubjectInputValue(value);
  };

  const handleMessageInputChange = (event) => {
    const { value } = event.target;
    console.log("Message...:", value);
    setMessageInputValue(value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log([
      { "Name ": nameInputValue },
      { "Email ": emailInputValue },
      { "Subect ": subjectInputValue },
      { "Message ": messageInputValue },
    ]);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-2xl italic underline font-medium text-red-600">
        Handling Input Distinctively from Individualistic Functions...
      </h2>
      <form
        onSubmit={handleFormSubmission}
        className="space-y-3 items-center justify-center flex flex-col"
      >
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name..."
            value={nameInputValue}
            onChange={handleNameInputChange}
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your full name..."
            value={emailInputValue}
            onChange={handleEmailInputChange}
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter your full name..."
            value={subjectInputValue}
            onChange={handleSubjectInputChange}
            className="bg-neutral-300 border border-slate-500 p-2 rounded-lg"
          />
          <textarea
            name="messageInputValue"
            id="messageInputValue"
            value={messageInputValue}
            onChange={handleMessageInputChange}
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

export default FormInstance1;
