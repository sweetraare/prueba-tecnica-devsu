import React from "react";
import { UseFormRegister } from "react-hook-form";
import Product from "../interfaces/products";

interface InputProps {
  label: string;
  register?: UseFormRegister<Product>;
  required?: boolean;
}

function Input({ label, register, required }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
}

export default Input;
