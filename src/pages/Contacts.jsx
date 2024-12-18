import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import CyberTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkBtn from "../components/CyberpunkButton/CyberpunkBtn";
import "./Contacts.css";
import { useRef } from "react";

export default function ContactsPage() {
  const nameForm = useRef("");
  const emailForm = useRef("");
  const subjectForm = useRef("");
  const messageForm = useRef("");

  function submitForm(event) {
    event.preventDefault();

    const name = nameForm.current.value;
    const email = emailForm.current.value;
    const subject = subjectForm.current.value;
    const message = messageForm.current.value;

    let mailtoLink = `mailto:${email}?subject=${
      name + " - " + subject
    }&body=${message}`;
    window.open(mailtoLink);
  }

  return (
    <>
      <div className="flex flex-row w-fit h-fit mb-8">
        <CyberpunkH1 text="Contacts" cssClasses="text-6xl mb-7" />
      </div>
      <div className="flex justify-center items-center m-auto w-ful h-fit">
        <CyberTechLines cssClasses="opacity-40 absolute top-1/2" />
      </div>
      <div className="flex justify-center items-center relative">
        <form
          className="flex flex-col cyberpunk-form w-1/2 h-1/2 p-4"
          onSubmit={submitForm}
        >
          <CyberpunkH1
            text="Fill out the form and let's build the future together"
            cssClasses="text-2xl mb-[2.5em] text-center"
          />
          {/* Name */}
          <div className="flex flex-row">
            <label className="mr-4 w-1/12" htmlFor="name">
              Name
            </label>
            <input
              ref={nameForm}
              type="text"
              id="name"
              name="name"
              className="w-fit cyberpunk-input"
            />
          </div>
          {/* Email */}
          <div className="flex flex-row mt-[1.5em]">
            <label className="mr-4 w-1/12" htmlFor="email">
              Email
            </label>
            <input
              ref={emailForm}
              type="email"
              id="email"
              name="email"
              className="w-fit cyberpunk-input"
            />
          </div>
          {/* Subject */}
          <div className="flex flex-row mt-[1.5em]">
            <label className="mr-4 w-1/12" htmlFor="subject">
              Subject
            </label>
            <input
              ref={subjectForm}
              type="text"
              id="subject"
              name="subject"
              className="w-fit cyberpunk-input"
            />
          </div>
          {/* Message */}
          <div className="mt-[1.5em] flex flex-col">
            <label className="mb-4 w-1/12" htmlFor="message">
              Message
            </label>
            <textarea
              ref={messageForm}
              id="message"
              name="message"
              className="max-w-full resize max-h-[10em] cyberpunk-input"
            ></textarea>
          </div>
          <CyberpunkBtn
            text={"Submit"}
            cssClasses={"mt-[1.5em] items-center justify-center m-auto"}
          />
        </form>
      </div>
    </>
  );
}
