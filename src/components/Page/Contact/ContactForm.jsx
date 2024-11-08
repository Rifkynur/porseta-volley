import React from "react";
import { IoSendSharp } from "react-icons/io5";
import Button from "../../global/Button";

const ContactForm = () => {
  return (
    <div className="w-full text-white md:max-w-xl">
      <h1 className="text-center text-xl font-bold lg:text-2xl">Contact Form</h1>
      <form className="flex flex-col gap-4 py-8 lg:gap-8">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input type="text" placeholder="masukan nama anda" className="rounded-lg p-2 text-primary focus:outline-secondary lg:p-4" required />
        </div>
        <div className="flex flex-col gap-2">
          <label>Address</label>
          <input type="text" placeholder="masukan alamat anda" className="rounded-lg p-2 text-primary focus:outline-secondary lg:p-4" required />
        </div>
        <div className="flex flex-col gap-2">
          <label>Message</label>
          <textarea placeholder="masukan pesan anda" className="resize-y rounded-lg p-2 text-primary focus:outline-secondary lg:p-4" required />
        </div>
        <Button>
          <IoSendSharp />
          <span>Send</span>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
