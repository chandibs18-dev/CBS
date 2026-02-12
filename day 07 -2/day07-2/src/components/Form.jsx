import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, submitForm, resetForm } from "../store/formSlice";

function Form() {
  const dispatch = useDispatch();
  const { name, email, message, loading, error, success } = useSelector(
    (state) => state.form
  );

  const handleChange = (e) => {
    dispatch(updateForm({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm({ name, email, message }));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">
          Message sent successfully!
          <button onClick={() => dispatch(resetForm())}>Reset</button>
        </p>
      )}
    </div>
  );
}

export default Form;
