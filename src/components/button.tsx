import React from "react";

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
}

function Button({ label, onClick, type, secondary, ...props }: ButtonProps) {
  return (
    <button
      className={`${
        secondary ? "bg-sky-100 " : "bg-yellow-300"
      } p-2 rounded text-blue-900`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
