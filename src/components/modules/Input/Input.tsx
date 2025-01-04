import React from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  id: string;
  type: "text" | "password" | "email" | "number";
  placeholder?: string;
  register: UseFormRegister<any>; // Accept the register function as a prop
  validationRules?: object;
  errorMessage?: string;
};

export function Input({
  label,
  id,
  type,
  placeholder,
  register,
  validationRules = {},
  errorMessage,
}: InputProps) {
  return (
    <div className="w-1/2 p-2 flex flex-col gap-2 mb-4">
      <label htmlFor={id} className="text-gray-300">
        {label}
      </label>
      <input
        id={id}
        {...register(id, validationRules)}
        type={type}
        placeholder={placeholder}
        className={`w-full h-12 border-2 rounded-lg p-2 ${
          errorMessage ? "border-red-500" : "border-gray-300 outline-none"
        }`}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

type SelectProps = {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  validationRules?: object;
  errorMessage?: string;
  defOptions:string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({
  label,
  id,
  options,
  defOptions,
  register,
  validationRules = {},
  errorMessage,
  onChange
}: SelectProps) {
  return (
    <div className="w-1/2 p-2 flex flex-col gap-2 mb-4">
      <label htmlFor={id} className="text-gray-300">
        {label}
      </label>
      <select
        id={id}
        {...register(id, validationRules)}
        className={`w-full h-12 border-2 rounded-lg p-2 bg-white ${
          errorMessage ? "border-red-500" : "border-gray-300 outline-none"
        }`}
        onChange={onChange}
      >
        <option value="">{defOptions}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
