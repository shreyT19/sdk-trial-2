import React from "react";

export type InputProps = {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ placeholder, value, onChange, ...props }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-md border placeholder:text-gray-400 border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
