"use client";

import axios from "@/lib/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Add an interface for the form data
interface FormData {
  firstName: string;
  lastName: string;
  Email: string;
  phoneNumber: string;
  category: string;
  aboutYou: string;
}

export function LetsTalk() {
  const { register, handleSubmit } = useForm<FormData>();
  const [data, setData] = useState("");

  const onSubmit = async (formData: FormData) => {
    try {
      // Send form data to the API
      const response = await axios.post("/posts", formData); // Replace "/posts" with your API endpoint
      console.log("API Response:", response.data);

      // Update the state with the API response
      setData(JSON.stringify(response.data));
    } catch (error) {
      console.error("Error submitting form:", error);
      setData("Error submitting form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[800px] mx-auto">
      <input
        {...register("firstName")}
        required
        placeholder="First name"
        className="block w-full box-border rounded border border-white px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />
      <input
        {...register("lastName")}
        placeholder="Last name"
        className="block w-full box-border rounded border border-white px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />
      <input
        {...register("Email")}
        placeholder="youremail@domain.com"
        required
        type="email"
        className="block w-full box-border rounded border border-white px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />
      <input
        {...register("phoneNumber")}
        placeholder="Phone Number"
        required
        type="number"
        minLength={10}
        className="block w-full box-border rounded border border-white px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />
      <select
        {...register("category", { required: true })}
        className="block w-full box-border rounded border border-white px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      >
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea
        {...register("aboutYou")}
        placeholder="About you"
        className="block w-full box-border rounded border border-white px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />
      <p className="text-blue-600 text-center">{data}</p>
      <input
        type="submit"
        className="relative bg-blue-500 text-white uppercase border-none font-semibold mt-5 py-5 text-base tracking-[2px] block appearance-none rounded w-full transition-all duration-300 hover:bg-blue-600 active:top-[2px]"
      />
    </form>
  );
}
