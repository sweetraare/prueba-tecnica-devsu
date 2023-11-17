import { FieldError, Path, UseFormRegister } from "react-hook-form";
import Product from "../interfaces/products";

interface FormInput {
  label: string;
  id: Path<Product>;
  error?: FieldError;
  register: UseFormRegister<Product>;
  required: boolean;
  type?: string;
}

function FormInput(
  { label, id, register, error, required, type, ...props }: FormInput,
) {
  let errorMessage: string | undefined;

  if (error && error.type === "required") {
    errorMessage = "Este campo es requerido!";
  }

  return (
    <div className="flex flex-col">
      <label className="font-bold">{label}</label>
      <input
        className="border-2 border-gray-300 rounded bg-transparent"
        {...register(id, { required: required, ...props })}
        type={type}
      />
      <p className="text-red-500">{errorMessage || " "}</p>
    </div>
  );
}

export default FormInput;
