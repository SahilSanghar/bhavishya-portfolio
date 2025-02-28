"use client";
import React, { useState } from "react";

export default function ContactForm() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
};

return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-[#171717] mt-7 mb-20 p-6 rounded-lg shadow-md"
    >
      {/* Name & Email Fields (2 Columns, 1 Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xl font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg bg-[#2c2c2c] border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg bg-[#2c2c2c] border-gray-600 dark:text-white"
            required
          />
        </div>
      </div>

      {/* Textarea (Full Width, 1 Row) */}
      <div className="mt-4">
        <label className="block text-xl font-medium text-gray-700 border-gray-600 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-lg bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full text-xl bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
