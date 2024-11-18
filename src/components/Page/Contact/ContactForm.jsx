import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import Button from "../../global/Button";

const ContactForm = () => {
  const [inputForm, setInputForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((state) => ({ ...state, [name]: value }));
    console.log(inputForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, message } = inputForm;

    if (!name || !address || !message) {
      alert("Semua kolom harus diisi!");
      return;
    }
    const waNumber = "6281908746609";
    const waMessage = `Halo! Nama saya ${name}. Saya tinggal di ${address}. Pesan saya: ${message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waUrl, "_blank");
    window.location.reload();
  };
  return (
    <div className="w-full text-white md:max-w-xl">
      <h1 className="text-center text-xl font-bold lg:text-2xl">Contact Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-8 lg:gap-8">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input onChange={handleChange} type="text" name="name" placeholder="masukan nama anda" className="rounded-lg p-2 text-primary focus:outline-secondary lg:p-4" required />
        </div>
        <div className="flex flex-col gap-2">
          <label>Address</label>
          <input onChange={handleChange} type="text" name="address" placeholder="masukan alamat anda" className="rounded-lg p-2 text-primary focus:outline-secondary lg:p-4" required />
        </div>
        <div className="flex flex-col gap-2">
          <label>Message</label>
          <textarea onChange={handleChange} placeholder="masukan pesan anda" name="message" className="resize-y rounded-lg p-2 text-primary focus:outline-secondary lg:p-4" required />
        </div>
        <Button type={"submit"}>
          <IoSendSharp />
          <span>Send</span>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
