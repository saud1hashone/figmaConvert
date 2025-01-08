"use client";

import axios from "@/lib/axios";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Add an interface for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  category: string;
  aboutYou: string;
}

export function LetsTalk() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [data, setData] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (formData: FormData) => {
    try {
      setError(null); // Reset error state before submission
      const response = await axios.post("/users", formData);
      console.log("API Response:", response.data);
      setData("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      if (isAxiosError(error)) {
        console.log("Full error response:", error.response?.data);
        setError(
          error.response?.data?.error ||
            error.response?.data?.message ||
            "Failed to submit form. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setData("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[800px] mx-auto my-10 md:px-[10%] px-6"
    >
      <input
        {...register("firstName", { required: "First name is required" })}
        placeholder="First name"
        className={`block w-full box-border rounded border-2 ${
          errors.firstName ? "border-red-500" : "border-blue-500"
        } px-[15px] py-[10px] mb-[15px] text-sm font-sans`}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm mb-2">{errors.firstName.message}</p>
      )}

      <input
        {...register("lastName")}
        placeholder="Last name"
        className="block w-full box-border rounded border-2 border-blue-500 px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />

      <input
        {...register("email")}
        placeholder="youremail@domain.com"
        type="email"
        required
        className={`block w-full box-border rounded border-2 ${
          errors.email ? "border-red-500" : "border-blue-500"
        } px-[15px] py-[10px] mb-[15px] text-sm font-sans`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
      )}

      <input
        {...register("phoneNumber", {
          required: "Phone number is required",
          minLength: {
            value: 10,
            message: "Phone number must be at least 10 digits",
          },
        })}
        placeholder="Phone Number"
        required
        type="number"
        className={`block w-full box-border rounded border-2 ${
          errors.phoneNumber ? "border-red-500" : "border-blue-500"
        } px-[15px] py-[10px] mb-[15px] text-sm font-sans`}
      />
      {errors.phoneNumber && (
        <p className="text-red-500 text-sm mb-2">
          {errors.phoneNumber.message}
        </p>
      )}

      <select
        {...register("category", { required: "Please select a category" })}
        className={`block w-full box-border rounded border-2 ${
          errors.category ? "border-red-500" : "border-blue-500"
        } px-[15px] py-[10px] mb-[15px] text-sm font-sans`}
      >
        <option value="">Select...</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="other">Other</option>
      </select>
      {errors.category && (
        <p className="text-red-500 text-sm mb-2">{errors.category.message}</p>
      )}

      <textarea
        {...register("aboutYou")}
        placeholder="About you"
        className="block w-full box-border rounded border-2 border-blue-500 px-[15px] py-[10px] mb-[15px] text-sm font-sans"
      />

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {data && <p className="text-blue-600 text-center">{data}</p>}

      <input
        type="submit"
        className="relative bg-blue-500 text-white uppercase border-none font-semibold mt-5 py-5 text-base tracking-[2px] block appearance-none rounded w-full transition-all duration-300 hover:bg-blue-600 active:top-[2px]"
      />
    </form>
  );
}
