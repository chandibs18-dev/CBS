import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded-lg max-w-xs w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
      >
        <label htmlFor="name" className="font-semibold text-white">
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <label htmlFor="email" className="font-semibold text-white">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="YourEmail@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <label htmlFor="message" className="font-semibold text-white">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          required
          className="p-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
        />

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
