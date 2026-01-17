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
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">📝 Contact Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
        />

        <button
          type="submit"
          className="bg-white/20 text-white font-semibold py-3 rounded hover:bg-white hover:text-gray-900 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
